// src/components/ui/Input.js

export function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent ${className}`}
    />
  );
}
