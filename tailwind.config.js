module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',  // Fondo blanco
        foreground: '#000000',  // Texto negro
        card: '#f9f9f9',  // Color para las tarjetas claro
        'card-foreground': '#333333',  // Texto de las tarjetas más oscuro
        popover: '#f9f9f9',  // Fondo para popovers claro
        'popover-foreground': '#333333',  // Texto en popovers oscuro
        primary: '#1a73e8',  // Color primario para botones y enlaces
        'primary-hover': '#1558b0',  // Hover para el color primario
        accent: '#4caf50',  // Color de acento para resaltados
        'accent-hover': '#388e3c',  // Hover para el color de acento
        muted: '#757575',  // Color de texto mutado para menos énfasis
        'border-color': '#e0e0e0',  // Color para bordes de tarjetas y componentes
        link: '#1e88e5',  // Color para enlaces
        'link-hover': '#1565c0',  // Hover para enlaces
        danger: '#e53935',  // Color de advertencia o error
        'danger-hover': '#b71c1c',  // Hover para advertencias
      },
      boxShadow: {
        'card-shadow': '0 4px 12px rgba(0, 0, 0, 0.1)',  // Sombra suave para tarjetas
        'button-shadow': '0 2px 8px rgba(0, 0, 0, 0.15)',  // Sombra para botones
        'input-shadow': '0 1px 3px rgba(0, 0, 0, 0.2)',  // Sombra para campos de entrada
      },
      borderRadius: {
        'btn-rounded': '9999px',  // Redondeo máximo para botones y otros elementos
      },
    },
  },
  plugins: [],
};
