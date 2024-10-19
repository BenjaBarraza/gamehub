// src/components/ui/badge.js

export const Badge = ({ children, variant = 'primary' }) => {
    const getVariantClass = () => {
      switch (variant) {
        case 'secondary':
          return 'bg-blue-500 text-white';
        case 'outline':
          return 'border border-gray-500 text-gray-700';
        default:
          return 'bg-gray-200 text-gray-800';
      }
    };
  
    return (
      <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getVariantClass()}`}>
        {children}
      </span>
    );
  };
  