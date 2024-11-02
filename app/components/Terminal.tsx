import { useEffect, useRef } from 'react';
import pkg from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

const { Terminal } = pkg;

interface TerminalProps {
  options?: pkg.ITerminalOptions;
  onInit?: (terminal: pkg.Terminal) => void;
  className?: string;
}

export function Terminal({ options, onInit, className = "h-96" }: TerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    const terminal = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#1e1e1e',
      },
      ...options,
    });

    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(terminalRef.current);
    fitAddon.fit();

    onInit?.(terminal);

    const handleResize = () => fitAddon.fit();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      terminal.dispose();
    };
  }, [options, onInit]);

  return (
    <div ref={terminalRef} className={`rounded border border-gray-200 ${className}`} />
  );
}