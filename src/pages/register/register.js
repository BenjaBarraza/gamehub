import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && email && password && confirmPassword && password === confirmPassword) {
      const newUser = { 
        name: username, 
        email, 
        password, 
        avatar: '', 
        joinDate: new Date().toLocaleDateString(), 
        gamesReviewed: 0, 
        followers: 0, 
        following: 0 
      };

      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      
      // Verificar si el correo ya está registrado
      if (storedUsers.some((user) => user.email === email)) {
        alert("Este correo ya está registrado.");
        return;
      }

      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));

      console.log("Usuario registrado:", newUser);
      alert('Usuario registrado exitosamente. Ahora puedes iniciar sesión.');
      router.push('/register/login');
    } else {
      alert("Por favor, completa todos los campos correctamente.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-4">
          <div className="flex justify-center mb-4">
            <Image src="/logo.ico" alt="GameHub Logo" width={128} height={128} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Join GameHub</h2>
        <p className="text-center text-gray-600 mb-4">
          Create an account and start your gaming journey
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              placeholder="CoolGamer123" 
              className="w-full px-3 py-2 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
                type={showPassword ? 'text' : 'password'} 
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
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="confirm-password">Confirm Password</label>
            <div className="relative">
              <input 
                type={showConfirmPassword ? 'text' : 'password'} 
                id="confirm-password" 
                placeholder="********" 
                className="w-full px-3 py-2 border rounded-lg"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-2 top-2 text-gray-700"
              >
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="form-checkbox" required />
            <span className="ml-2 text-gray-700">
              I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
            </span>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Create Account
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-600">Already have an account? </span>
          <button onClick={() => router.push('/register/login')} className="text-blue-500 hover:underline">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
