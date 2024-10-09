import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { useAuth } from "../../context/AuthContext"; 
import Link from "next/link";
import Image from "next/image";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para alternar visibilidad
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Obtiene la lista de usuarios guardada en localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    // Busca un usuario que coincida con el email y la contraseña ingresados
    const foundUser = storedUsers.find(user => user.email === email && user.password === password);
  
    if (foundUser) {
      login(foundUser); // Guarda el usuario en el contexto
      console.log("Inicio de sesión exitoso:", foundUser);
      router.push('/'); // Redirige al usuario a la página principal
    } else {
      console.log("Los datos ingresados no coinciden con ningún usuario registrado.");
      alert("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
  };
  
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-4">
          <div className="flex justify-center mb-4"> 
            <Image src="/logo.ico" alt="GameHub Logo" width={128} height={128} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Login to GameHub</h2>
        <p className="text-center text-gray-600 mb-4">Enter your email and password to access your account</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="gamer@example.com" 
              className="w-full px-3 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} // Alterna entre 'text' y 'password'
                id="password" 
                placeholder="********" 
                className="w-full px-3 py-2 border rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-700"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <button 
            onClick={() => router.push('/register/forgotpassword')} 
            className="text-blue-600 hover:underline">
            Forgot your password?
          </button>
        </div>
        <div className="text-center mt-2">
          <span className="text-gray-600">Don't have an account? </span>
          <button onClick={() => router.push('/register/register')} className="text-blue-500 hover:underline" > 
            Sign up </button>
        </div>
        <div className="text-center mt-4">
          <button onClick={() => router.push('/')} className="text-blue-500 hover:underline" > 
            Home </button>
        </div>
      </div>
    </div>
  );
}