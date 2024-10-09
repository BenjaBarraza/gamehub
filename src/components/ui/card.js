// src/components/ui/card.js

export function Card({ children }) {
  return <div className="card p-4 shadow-lg rounded-lg bg-white">{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="card-header border-b pb-2 mb-4">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="card-title text-lg font-semibold">{children}</h2>;
}

export function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="card-footer border-t pt-2 mt-4">{children}</div>;
}

// Agrega esta función para CardDescription
export function CardDescription({ children }) {
  return <p className="card-description text-gray-500">{children}</p>;
}
