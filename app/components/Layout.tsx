import { Link } from "@remix-run/react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <header className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-3xl font-bold hover:text-indigo-100">Zoney Hotkeys</Link>
          <p className="mt-2">Master keyboard shortcuts for popular applications</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}