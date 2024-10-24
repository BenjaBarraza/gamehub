import Image from 'next/image';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from 'next/router';

export default function UserProfile() {
  const { user, login, logout } = useAuth();
  const [avatar, setAvatar] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('favorites');
  const router = useRouter();

  useEffect(() => {
    if (user?.avatar) {
      setAvatar(user.avatar);
    }
  }, [user]);

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

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

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSavePassword = () => {
    if (password.length >= 6) {
      alert('Contraseña actualizada correctamente');
    } else {
      alert('La contraseña debe tener al menos 6 caracteres');
    }
  };

  const handleDeleteAccount = () => {
    if (confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.')) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const updatedUsers = users.filter(u => u.email !== user.email);
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      logout(); // Cerrar sesión
      router.push('/'); // Redirigir al inicio
      alert('Cuenta eliminada');
    }
  };

  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-32 h-32">
              {avatar ? (
                <AvatarImage src={avatar} alt={user.name || 'Avatar'} />
              ) : (
                <AvatarFallback>{user.name?.charAt(0) || '?'}</AvatarFallback>
              )}
            </Avatar>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{user.name || 'Usuario'}</h1>
              <p className="mb-4 max-w-2xl">{user.bio || 'Sin biografía disponible'}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                <Badge variant="secondary">Miembro desde {user.joinDate || 'Fecha desconocida'}</Badge>
                <Badge variant="secondary">{user.gamesReviewed || 0} juegos reseñados</Badge>
                <Badge variant="secondary">{user.followers || 0} seguidores</Badge>
                <Badge variant="secondary">Siguiendo a {user.following || 0}</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="settings" value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="favorites">Juegos Favoritos</TabsTrigger>
          <TabsTrigger value="reviews">Reseñas Recientes</TabsTrigger>
          <TabsTrigger value="settings">Configuración</TabsTrigger>
        </TabsList>

        <TabsContent value="favorites" className={activeTab === 'favorites' ? '' : 'hidden'}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Juegos Favoritos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aquí estarán los juegos favoritos del usuario.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className={activeTab === 'reviews' ? '' : 'hidden'}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Reseñas Recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aquí estarán las reseñas recientes del usuario.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className={activeTab === 'settings' ? '' : 'hidden'}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Subir Imagen de Perfil</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mb-4"
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
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Nueva contraseña"
                  className="mb-4 px-4 py-2 border rounded-lg"
                />
                <Button onClick={handleSavePassword}>Guardar Contraseña</Button>
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
                  onClick={handleDeleteAccount}
                  className="bg-red-500 hover:bg-red-700"
                >
                  Eliminar Cuenta
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
