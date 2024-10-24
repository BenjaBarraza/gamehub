import React, { useState } from 'react';

export function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div>
      {children.map((child) =>
        child.type.name === 'TabsList'
          ? React.cloneElement(child, { activeTab, setActiveTab })
          : React.cloneElement(child, { activeTab })
      )}
    </div>
  );
}

export function TabsList({ children, activeTab, setActiveTab }) {
  return (
    <div className="flex border-b">
      {children.map((child) =>
        child.props?.value ? (
          React.cloneElement(child, {
            isActive: child.props.value === activeTab,
            onClick: () => setActiveTab(child.props.value),
          })
        ) : null // Si el hijo no tiene la propiedad `value`, no se renderiza
      )}
    </div>
  );
}

export function TabsTrigger({ children, value, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 -mb-px border-b-2 ${
        isActive ? 'border-black' : 'border-transparent'
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value, activeTab }) {
  return value === activeTab ? <div className="py-4">{children}</div> : null;
}
