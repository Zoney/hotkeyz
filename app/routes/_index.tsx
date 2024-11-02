import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { Card } from "~/components/Card";

export const meta: MetaFunction = () => {
  return [
    { title: "Zoney Hotkeys - Learn keyboard shortcuts like a pro" },
    { name: "description", content: "Master hotkeys for VSCode, Vim, macOS Mail, and more" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Layout>
        <main className="p-6 space-y-8">
          <div className="bg-zinc-800 rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                to="/vim"
                title="Vim"
                description="Master the art of modal text editing"
              />
              <Card
                to="/vscode"
                title="VSCode"
                description="Boost your coding productivity"
              />
              <Card
                to="/cursor"
                title="Cursor"
                description="AI-powered coding with keyboard efficiency"
              />
              <Card
                to="/macos-mail"
                title="macOS Mail"
                description="Email management shortcuts"
              />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}