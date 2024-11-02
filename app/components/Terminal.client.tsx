import { useEffect, useRef } from 'react';
import pkg from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

const { Terminal: XTerm } = pkg;

interface ITerminalOptions {
  cursorBlink?: boolean;
  theme?: {
    background: string;
    [key: string]: any;
  };
  [key: string]: any;
}

interface TerminalProps {
  options?: ITerminalOptions;
  onInit?: (terminal: pkg.Terminal) => void;
  className?: string;
}

type Mode = 'normal' | 'insert' | 'command' | 'visual';

export function Terminal({ options, onInit, className = "h-96" }: TerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminalInstance = useRef<pkg.Terminal | null>(null);
  const modeRef = useRef<Mode>('normal');
  const contentRef = useRef<string[]>([]);
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const commandBufferRef = useRef('');
  const visualStartRef = useRef({ x: 0, y: 0 });
  const initializedRef = useRef(false);

  const writeInitialContent = (terminal: pkg.Terminal, content: string[]) => {
    contentRef.current = content;
    terminal.clear();
    content.forEach((line, index) => {
      if (index === content.length - 1) {
        terminal.write(line);
      } else {
        terminal.writeln(line);
      }
    });
    cursorPosRef.current = { x: 0, y: 0 };
    updateStatusLine(terminal);
  };

  const updateStatusLine = (terminal: pkg.Terminal) => {
    terminal.write('\x1b7'); // Save cursor position
    terminal.write(`\x1b[${terminal.rows};0H`); // Move to last line
    terminal.write('\x1b[2K'); // Clear line
    
    switch (modeRef.current) {
      case 'insert':
        terminal.write('-- INSERT --');
        break;
      case 'command':
        terminal.write(`:${commandBufferRef.current}`);
        break;
      case 'visual':
        terminal.write('-- VISUAL --');
        break;
    }
    
    terminal.write('\x1b8'); // Restore cursor position
  };

  const moveCursor = (terminal: pkg.Terminal, direction: 'left' | 'right' | 'up' | 'down') => {
    const currentLine = contentRef.current[cursorPosRef.current.y] || '';
    const maxX = currentLine.length;
    const maxY = contentRef.current.length - 1;

    switch (direction) {
      case 'left':
        if (cursorPosRef.current.x > 0) {
          cursorPosRef.current.x--;
          terminal.write('\x1b[D');
        }
        break;
      case 'right':
        if (cursorPosRef.current.x < maxX) {
          cursorPosRef.current.x++;
          terminal.write('\x1b[C');
        }
        break;
      case 'up':
        if (cursorPosRef.current.y > 0) {
          cursorPosRef.current.y--;
          terminal.write('\x1b[A');
          // Adjust x position if needed
          const upLine = contentRef.current[cursorPosRef.current.y] || '';
          if (cursorPosRef.current.x > upLine.length) {
            cursorPosRef.current.x = upLine.length;
            terminal.write(`\x1b[${cursorPosRef.current.x + 1}G`);
          }
        }
        break;
      case 'down':
        if (cursorPosRef.current.y < maxY) {
          cursorPosRef.current.y++;
          terminal.write('\x1b[B');
          // Adjust x position if needed
          const downLine = contentRef.current[cursorPosRef.current.y] || '';
          if (cursorPosRef.current.x > downLine.length) {
            cursorPosRef.current.x = downLine.length;
            terminal.write(`\x1b[${cursorPosRef.current.x + 1}G`);
          }
        }
        break;
    }
  };

  const handleBackspace = (terminal: pkg.Terminal) => {
    const currentLine = contentRef.current[cursorPosRef.current.y];
    if (cursorPosRef.current.x > 0) {
      contentRef.current[cursorPosRef.current.y] = 
        currentLine.slice(0, cursorPosRef.current.x - 1) + 
        currentLine.slice(cursorPosRef.current.x);
      cursorPosRef.current.x--;
      terminal.write('\x1b[D \x1b[D'); // Move left, clear character, move left again
    } else if (cursorPosRef.current.y > 0) {
      // Join with previous line
      const previousLine = contentRef.current[cursorPosRef.current.y - 1];
      cursorPosRef.current.x = previousLine.length;
      cursorPosRef.current.y--;
      contentRef.current[cursorPosRef.current.y] = previousLine + currentLine;
      contentRef.current.splice(cursorPosRef.current.y + 1, 1);
      terminal.write('\x1b[A\x1b[G\x1b[' + (cursorPosRef.current.x + 1) + 'G');
    }
  };

  const refreshScreen = (terminal: pkg.Terminal) => {
    // Save current content and cursor
    const content = [...contentRef.current];
    const cursor = { ...cursorPosRef.current };
    
    // Clear screen and reset cursor
    terminal.write('\x1b[2J');    // Clear entire screen
    terminal.write('\x1b[H');     // Move cursor to home position
    
    // Write content line by line
    content.forEach((line, index) => {
      terminal.write(line);
      if (index < content.length - 1) {
        terminal.write('\r\n');
      }
    });
    
    // Restore cursor position
    terminal.write(`\x1b[${cursor.y + 1};${cursor.x + 1}H`);
    updateStatusLine(terminal);
  };

  const highlightSelection = (terminal: pkg.Terminal) => {
    const start = visualStartRef.current;
    const end = cursorPosRef.current;
    
    // Save current content
    const content = [...contentRef.current];
    
    // Clear screen and reset cursor
    terminal.write('\x1b[2J');    // Clear entire screen
    terminal.write('\x1b[H');     // Move cursor to home position
    
    // Calculate selection range
    const startLine = Math.min(start.y, end.y);
    const endLine = Math.max(start.y, end.y);
    const isForwardSelection = start.y < end.y || (start.y === end.y && start.x <= end.x);
    
    // Write content line by line with highlighting
    content.forEach((line, lineIndex) => {
      if (lineIndex >= startLine && lineIndex <= endLine) {
        // Line is part of selection
        if (startLine === endLine) {
          // Single line selection
          const selStart = Math.min(start.x, end.x);
          const selEnd = Math.min(Math.max(start.x, end.x) + 1, line.length);
          
          terminal.write(line.slice(0, selStart));
          terminal.write('\x1b[7m');
          terminal.write(line.slice(selStart, selEnd));
          terminal.write('\x1b[27m');
          if (selEnd < line.length) {
            terminal.write(line.slice(selEnd));
          }
        } else {
          // Multi-line selection
          if (lineIndex === startLine) {
            // First line of selection
            const selStart = isForwardSelection ? start.x : end.x;
            terminal.write(line.slice(0, selStart));
            terminal.write('\x1b[7m');
            terminal.write(line.slice(selStart));
            terminal.write('\x1b[27m');
          } else if (lineIndex === endLine) {
            // Last line of selection
            const selEnd = Math.min((isForwardSelection ? end.x : start.x) + 1, line.length);
            terminal.write('\x1b[7m');
            terminal.write(line.slice(0, selEnd));
            terminal.write('\x1b[27m');
            if (selEnd < line.length) {
              terminal.write(line.slice(selEnd));
            }
          } else {
            // Middle line of selection
            terminal.write('\x1b[7m');
            terminal.write(line);
            terminal.write('\x1b[27m');
          }
        }
      } else {
        // Line is not part of selection
        terminal.write(line);
      }
      
      // Add line break if not the last line
      if (lineIndex < content.length - 1) {
        terminal.write('\r\n');
      }
    });
    
    // Restore cursor position
    terminal.write(`\x1b[${end.y + 1};${end.x + 1}H`);
    updateStatusLine(terminal);
  };

  useEffect(() => {
    if (!terminalRef.current || initializedRef.current) return;
    initializedRef.current = true;

    // Ensure the container has dimensions before creating the terminal
    const container = terminalRef.current;
    container.style.height = '384px'; // 24rem (h-96)
    container.style.minWidth = '320px';

    // Create terminal with explicit dimensions
    const terminal = new XTerm({
      cursorBlink: true,
      theme: {
        background: '#1e1e1e',
        foreground: '#ffffff',
        cursor: '#ffffff',
      },
      rows: 24,
      cols: 80,
      ...(options || {}),
    });

    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);

    try {
      // Ensure container is ready
      requestAnimationFrame(() => {
        try {
          terminal.open(container);
          terminalInstance.current = terminal;

          // Wait for next frame to ensure terminal is mounted
          requestAnimationFrame(() => {
            try {
              fitAddon.fit();
              
              // Initialize with content
              if (onInit) {
                const lines: string[] = [];
                
                // Override write temporarily to capture content
                const originalWrite = terminal.write.bind(terminal);
                terminal.write = (data: string | Uint8Array) => {
                  const text = data.toString();
                  if (text.includes('\r\n')) {
                    lines.push(...text.split('\r\n'));
                  } else {
                    lines.push(text);
                  }
                  return originalWrite(data);
                };

                // Call initialization
                onInit(terminal);
                
                // Restore original write function
                terminal.write = originalWrite;

                // Clear and rewrite content properly
                terminal.clear();
                writeInitialContent(terminal, lines.filter(line => line.trim()));
              }

              // Add key handlers after content is initialized
              terminal.onKey(({ key, domEvent }) => {
                const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;

                switch (modeRef.current) {
                  case 'normal':
                    switch (key) {
                      case 'i':
                        modeRef.current = 'insert';
                        updateStatusLine(terminal);
                        break;
                      case 'v':
                        modeRef.current = 'visual';
                        visualStartRef.current = { ...cursorPosRef.current };
                        updateStatusLine(terminal);
                        break;
                      case ':':
                        modeRef.current = 'command';
                        commandBufferRef.current = '';
                        updateStatusLine(terminal);
                        break;
                      case 'h':
                        moveCursor(terminal, 'left');
                        break;
                      case 'l':
                        moveCursor(terminal, 'right');
                        break;
                      case 'j':
                        moveCursor(terminal, 'down');
                        break;
                      case 'k':
                        moveCursor(terminal, 'up');
                        break;
                    }
                    break;

                  case 'insert':
                    if (domEvent.key === 'Escape') {
                      modeRef.current = 'normal';
                      updateStatusLine(terminal);
                    } else if (domEvent.key === 'Backspace') {
                      handleBackspace(terminal);
                    } else if (domEvent.key === 'Enter') {
                      const currentLine = contentRef.current[cursorPosRef.current.y];
                      const newLine = currentLine.slice(cursorPosRef.current.x);
                      contentRef.current[cursorPosRef.current.y] = currentLine.slice(0, cursorPosRef.current.x);
                      contentRef.current.splice(cursorPosRef.current.y + 1, 0, newLine);
                      cursorPosRef.current.y++;
                      cursorPosRef.current.x = 0;
                      terminal.write('\r\n');
                    } else if (printable) {
                      const currentLine = contentRef.current[cursorPosRef.current.y];
                      contentRef.current[cursorPosRef.current.y] = 
                        currentLine.slice(0, cursorPosRef.current.x) + 
                        key + 
                        currentLine.slice(cursorPosRef.current.x);
                      cursorPosRef.current.x++;
                      terminal.write(key);
                    }
                    break;

                  case 'visual':
                    if (domEvent.key === 'Escape') {
                      modeRef.current = 'normal';
                      refreshScreen(terminal);
                    } else {
                      switch (key) {
                        case 'h':
                          moveCursor(terminal, 'left');
                          highlightSelection(terminal);
                          break;
                        case 'l':
                          moveCursor(terminal, 'right');
                          highlightSelection(terminal);
                          break;
                        case 'j':
                          moveCursor(terminal, 'down');
                          highlightSelection(terminal);
                          break;
                        case 'k':
                          moveCursor(terminal, 'up');
                          highlightSelection(terminal);
                          break;
                      }
                    }
                    break;

                  case 'command':
                    if (domEvent.key === 'Enter') {
                      if (commandBufferRef.current === 'q') {
                        terminal.write('\r\n\r\nExiting vim...\r\n');
                      }
                      modeRef.current = 'normal';
                      commandBufferRef.current = '';
                      updateStatusLine(terminal);
                    } else if (domEvent.key === 'Escape') {
                      modeRef.current = 'normal';
                      commandBufferRef.current = '';
                      updateStatusLine(terminal);
                    } else if (domEvent.key === 'Backspace') {
                      if (commandBufferRef.current.length > 0) {
                        commandBufferRef.current = commandBufferRef.current.slice(0, -1);
                        updateStatusLine(terminal);
                      }
                    } else if (printable) {
                      commandBufferRef.current += key;
                      updateStatusLine(terminal);
                    }
                    break;
                }
              });

              // Handle resize
              const handleResize = () => {
                try {
                  if (terminal && fitAddon) {
                    requestAnimationFrame(() => {
                      fitAddon.fit();
                      updateStatusLine(terminal);
                    });
                  }
                } catch (error) {
                  console.error('Error resizing terminal:', error);
                }
              };

              window.addEventListener('resize', handleResize);

              return () => {
                window.removeEventListener('resize', handleResize);
                if (terminal) {
                  terminal.dispose();
                }
              };
            } catch (error) {
              console.error('Error during terminal initialization:', error);
            }
          });
        } catch (error) {
          console.error('Error opening terminal:', error);
        }
      });
    } catch (error) {
      console.error('Error setting up terminal:', error);
    }
  }, [options, onInit]);

  return (
    <div 
      ref={terminalRef} 
      className={`rounded border border-gray-200 ${className}`}
      style={{ minHeight: '384px' }}
    />
  );
} 