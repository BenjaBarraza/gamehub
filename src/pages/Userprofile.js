import Image from 'next/image';
import { Edit3, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { useRouter } from 'next/router';

export default function UserProfile() {
  const { user, login, logout } = useAuth();
  const [avatar, setAvatar] = useState('');
  const [activeSection, setActiveSection] = useState('favorites');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedAvatar = localStorage.getItem(`avatar_${user?.username}`);
    if (storedAvatar) {
      setAvatar(storedAvatar);
    } else if (user?.avatar) {
      setAvatar(user.avatar);
    }
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedAvatar = reader.result;
        setAvatar(updatedAvatar);

        const updatedUser = { ...user, avatar: updatedAvatar };
        login(updatedUser);
        localStorage.setItem(`avatar_${user.username}`, updatedAvatar);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const handleDeleteAccount = () => {
    if (confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.')) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const updatedUsers = users.filter(u => u.email !== user.email);
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      localStorage.removeItem(`avatar_${user.username}`);

      logout();
      router.push('/');
      alert('Cuenta eliminada');
    }
  };

  const handleSavePassword = (newPassword) => {
    if (newPassword.length >= 6) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const updatedUsers = users.map((u) =>
        u.email === user.email ? { ...u, password: newPassword } : u
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      login({ ...user, password: newPassword });
      alert('Contraseña actualizada correctamente');
    } else {
      alert('La contraseña debe tener al menos 6 caracteres');
    }
  };

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const renderSection = () => {
    switch (activeSection) {
      case 'favorites':
        return (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Juegos Favoritos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aquí estarán los juegos favoritos del usuario.</p>
            </CardContent>
          </Card>
        );
      case 'reviews':
        return (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Reseñas Recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aquí estarán las reseñas recientes del usuario.</p>
            </CardContent>
          </Card>
        );
      case 'settings':
        return (
          <>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Cambiar Imagen de Perfil</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center">
                  <label
                    htmlFor="avatar-upload"
                    className="cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
                  >
                    <Edit3 className="w-5 h-5 text-black" />
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Cambiar Contraseña</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="relative w-full">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Nueva contraseña"
                      className="mb-4 px-4 py-2 border rounded-lg w-full"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute right-2 top-2 text-gray-600"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  <Button className="w-full" onClick={() => handleSavePassword(password)}>
                    Guardar Contraseña
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Eliminar Cuenta</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <Button
                    className="bg-red-600 hover:bg-red-500 text-white w-full"
                    onClick={handleDeleteAccount}
                  >
                    Eliminar Cuenta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        );
      case 'data':
        return (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Mis Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Nombre y Apellidos</p>
                  <p>{user?.name || 'No disponible'}</p>
                </div>
                <div>
                  <p className="font-semibold">Correo Electrónico</p>
                  <p>{user?.email || 'No disponible'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/4 bg-white text-black rounded-lg shadow-md p-6">
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-24 h-24 lg:w-16 lg:h-16 border border-gray-500">
            {avatar ? (
              <AvatarImage src={avatar} alt={user?.name || 'Avatar'} />
            ) : (
              <AvatarFallback>{user?.name?.charAt(0) || '?'}</AvatarFallback>
            )}
          </Avatar>
          <div>
            <h1 className="text-xl font-bold">{user?.name || 'Usuario'}</h1>
            <p className="text-gray-400">@{user?.username || 'N/A'}</p>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <Button className="w-full" onClick={() => setActiveSection('favorites')}>Juegos Favoritos</Button>
          <Button className="w-full" onClick={() => setActiveSection('reviews')}>Reseñas Recientes</Button>
          <Button className="w-full" onClick={() => setActiveSection('settings')}>Configuración</Button>
          <Button className="w-full" onClick={() => setActiveSection('data')}>Mis Datos</Button>
          <Button className="w-full bg-red-600 text-white" onClick={handleLogout}>Cerrar Sesión</Button>
        </div>
      </div>
      <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-md p-6">
        {renderSection()}
      </div>
    </div>
  );
}
