import { Link } from "@remix-run/react";

interface CardProps {
  to: string;
  title: string;
  description: string;
}

export function Card({ to, title, description }: CardProps) {
  return (
    <Link 
      to={to} 
      className="block bg-zinc-800 hover:bg-zinc-700 rounded-lg p-6 shadow-lg transition-colors"
    >
      <h2 className="text-xl font-semibold text-zinc-100 mb-2">{title}</h2>
      <p className="text-zinc-300">{description}</p>
    </Link>
  );
}