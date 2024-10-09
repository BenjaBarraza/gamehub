// src/components/ui/label.js

export function Label({ children, className = "", ...props }) {
  return (
    <label
      {...props}
      className={`block text-sm font-medium text-gray-700 ${className}`}
    >
      {children}
    </label>
  );
}