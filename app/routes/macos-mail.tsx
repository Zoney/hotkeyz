import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { Cmd, Shift, Opt, Ctrl, KeyboardShortcut } from "~/components/KeyboardShortcut";

export const meta: MetaFunction = () => {
  return [
    { title: "Learn macOS Mail - Zoney Hotkeys" },
    { name: "description", content: "Master macOS Mail keyboard shortcuts" },
  ];
};

export default function MacOSMail() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Layout>
        <h1 className="text-3xl font-bold mb-6">macOS Mail Shortcuts</h1>
        
        <main className="p-6 space-y-8">
          <div className="bg-zinc-800 rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              <ShortcutSection title="Essential Actions">
                <ShortcutItem keys={[<Cmd />, 'N']}>New Message</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, <Shift />, 'D']}>Send Message</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, 'R']}>Reply</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, <Shift />, 'R']}>Reply All</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, <Shift />, 'F']}>Forward</ShortcutItem>
              </ShortcutSection>

              <ShortcutSection title="Message Management">
                <ShortcutItem keys={[<Cmd />, <Shift />, 'U']}>Toggle Read/Unread</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, <Shift />, 'J']}>Toggle Junk</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, <Shift />, 'L']}>Toggle Flag</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, '↓']}>Archive</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, 'S']}>Save Draft</ShortcutItem>
              </ShortcutSection>

              <ShortcutSection title="Navigation">
                <ShortcutItem keys={[<Cmd />, '1']}>Go to Inbox</ShortcutItem>
                <ShortcutItem keys={['↑']}>Previous Message</ShortcutItem>
                <ShortcutItem keys={['↓']}>Next Message</ShortcutItem>
                <ShortcutItem keys={['←']}>Collapse Thread</ShortcutItem>
                <ShortcutItem keys={['→']}>Expand Thread</ShortcutItem>
              </ShortcutSection>

              <ShortcutSection title="Window Management">
                <ShortcutItem keys={[<Opt />, <Cmd />, 'N']}>New Viewer Window</ShortcutItem>
                <ShortcutItem keys={[<Opt />, <Shift />, <Cmd />, 'N']}>New Tab</ShortcutItem>
                <ShortcutItem keys={[<Ctrl />, <Cmd />, 'S']}>Toggle Sidebar</ShortcutItem>
                <ShortcutItem keys={[<Opt />, <Cmd />, 'W']}>Close All Windows</ShortcutItem>
              </ShortcutSection>

              <ShortcutSection title="Text Formatting">
                <ShortcutItem keys={[<Cmd />, 'B']}>Bold</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, 'I']}>Italic</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, 'U']}>Underline</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, '+']}>Increase Font</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, '-']}>Decrease Font</ShortcutItem>
              </ShortcutSection>

              <ShortcutSection title="Advanced">
                <ShortcutItem keys={[<Cmd />, <Shift />, 'A']}>Attach File</ShortcutItem>
                <ShortcutItem keys={[<Opt />, <Cmd />, 'B']}>Show BCC Field</ShortcutItem>
                <ShortcutItem keys={[<Opt />, <Cmd />, 'R']}>Show Reply-To</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, 'Z']}>Undo</ShortcutItem>
                <ShortcutItem keys={[<Cmd />, <Shift />, 'Z']}>Redo</ShortcutItem>
              </ShortcutSection>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

function ShortcutSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-3 text-zinc-100">{title}</h2>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}

function ShortcutItem({ keys, children }: { keys: React.ReactNode[]; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-zinc-300">{children}</span>
      <div className="flex items-center gap-1">
        {keys.map((key, index) => (
          <span key={index}>{key}</span>
        ))}
      </div>
    </div>
  );
} 