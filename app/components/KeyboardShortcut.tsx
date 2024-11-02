import { ReactNode } from 'react';

interface KeyboardShortcutProps {
  children: ReactNode;
  className?: string;
}

export function KeyboardShortcut({ children, className = '' }: KeyboardShortcutProps) {
  return (
    <kbd className={`px-2 py-1 text-sm font-mono bg-zinc-700 text-zinc-100 rounded border border-zinc-600 ${className}`}>
      {children}
    </kbd>
  );
}

export function Cmd() {
  return <KeyboardShortcut>⌘</KeyboardShortcut>;
}

export function Shift() {
  return <KeyboardShortcut>⇧</KeyboardShortcut>;
}

export function Opt() {
  return <KeyboardShortcut>⌥</KeyboardShortcut>;
}

export function Ctrl() {
  return <KeyboardShortcut>⌃</KeyboardShortcut>;
} 