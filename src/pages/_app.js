import '../styles/globals.css';
import { AuthProvider } from '../context/AuthContext';
import Layout from '../components/Layout'; // Asegúrate de que esta ruta sea correcta

function MyApp({ Component, pageProps }) {
  // Mantén el AuthProvider en el nivel superior para que toda la aplicación tenga acceso al contexto
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
