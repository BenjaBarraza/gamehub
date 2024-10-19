// src/components/ui/avatar.js

export const Avatar = ({ children }) => {
    return (
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
        {children}
      </div>
    );
  };
  
  export const AvatarFallback = ({ children }) => {
    return (
      <div className="text-white font-semibold">
        {children}
      </div>
    );
  };
  
  export const AvatarImage = ({ src, alt }) => {
    return (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
      />
    );
  };
  