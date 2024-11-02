import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Learn VSCode - Zoney Hotkeys" },
    { name: "description", content: "Master VSCode keyboard shortcuts" },
  ];
};

export default function VSCodeRoute() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Layout>
        <h1 className="text-3xl font-bold mb-6">Learn VSCode</h1>
        
        <main className="p-6 space-y-8">
          <div className="bg-zinc-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-zinc-300">
              We're working on an interactive VSCode tutorial. Check back soon!
            </p>
          </div>

          <div className="bg-zinc-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Quick Reference</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">File Operations</h3>
                <ul className="ml-4 list-disc text-zinc-300">
                  <li>Cmd/Ctrl + S - Save</li>
                  <li>Cmd/Ctrl + P - Quick Open</li>
                  <li>Cmd/Ctrl + W - Close File</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
} 