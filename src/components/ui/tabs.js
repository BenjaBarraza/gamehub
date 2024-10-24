import React, { useState } from 'react';

// Componente principal de Tabs
export function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { key: `tab-${index}`, activeTab, setActiveTab })
      )}
    </div>
  );
}

// Lista de pestañas (navegación)
export function TabsList({ children, activeTab, setActiveTab }) {
  return (
    <div className="flex">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          key: `tab-list-${index}`, // Agregar una key única aquí
          isActive: child.props.value === activeTab,
          onClick: () => setActiveTab(child.props.value),
        })
      )}
    </div>
  );
}

// Botón de cada pestaña
export function TabsTrigger({ value, isActive, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
    >
      {children}
    </button>
  );
}

// Contenido de cada pestaña
export function TabsContent({ value, activeTab, children }) {
  if (value !== activeTab) return null;
  return <div>{children}</div>;
}
