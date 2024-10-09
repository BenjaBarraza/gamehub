// src/components/ui/checkbox.js

export function Checkbox({ checked, onChange, ...props }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
      {...props}
    />
  );
}
