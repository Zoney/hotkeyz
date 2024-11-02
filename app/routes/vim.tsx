import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { Terminal } from "~/components/Terminal";
import type pkg from '@xterm/xterm';

export const meta: MetaFunction = () => {
  return [
    { title: "Learn Vim - Zoney Hotkeys" },
    { name: "description", content: "Interactive Vim tutorial with hands-on practice" },
  ];
};

function initializeVimTerminal(terminal: pkg.Terminal) {
  terminal.writeln('Welcome to Vim Tutorial!');
  terminal.writeln('Press i for insert mode');
  terminal.writeln('Press Esc to exit insert mode');
  terminal.writeln('Type :q to quit');
}

export default function VimRoute() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Learn Vim</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Interactive Terminal</h2>
          <Terminal onInit={initializeVimTerminal} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
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
      </div>
    </Layout>
  );
}