import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { Terminal as VimTerminal } from "~/components/Terminal.client";
import type pkg from "@xterm/xterm";
import { ClientOnly } from "remix-utils/client-only";

export const meta: MetaFunction = () => {
  return [
    { title: "Learn Vim - Zoney Hotkeys" },
    { name: "description", content: "Interactive Vim tutorial with hands-on practice" },
  ];
};

function initializeVimTerminal(terminal: pkg.Terminal) {
  terminal.write("Welcome to Vim Tutorial!\r\n");
  terminal.write("Press i for insert mode\r\n");
  terminal.write("Press Esc to exit insert mode\r\n");
  terminal.write("Type :q to quit\r\n");
  terminal.write('\x1b[H');
}

export default function VimRoute() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Layout>
        <h1 className="text-3xl font-bold mb-6">Learn Vim</h1>
        
        <main className="p-6 space-y-8">
          <div className="bg-zinc-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Interactive Terminal</h2>
            <ClientOnly fallback={<div>Loading terminal...</div>}>
              {() => <VimTerminal onInit={initializeVimTerminal} />}
            </ClientOnly>
          </div>

          <div className="bg-zinc-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Quick Reference</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Basic Navigation</h3>
                <ul className="ml-4 list-disc">
                  <li>h - move left</li>
                  <li>j - move down</li>
                  <li>k - move up</li>
                  <li>l - move right</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium">Modes</h3>
                <ul className="ml-4 list-disc">
                  <li>i - enter insert mode</li>
                  <li>Esc - return to normal mode</li>
                  <li>v - enter visual mode</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}