import { Link } from "@remix-run/react";

interface CardProps {
  to: string;
  title: string;
  description: string;
}

export function Card({ to, title, description }: CardProps) {
  return (
    <Link to={to} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}