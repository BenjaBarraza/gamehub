import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const GameDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Obtenemos el ID del juego desde la URL.
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (id) {
      // Llamada a la API de Rawg con el ID del juego.
      fetch(`https://api.rawg.io/api/games/${id}?key=c0d4ff2de6834a6daf0aa751fc95f8fd`)
        .then((response) => response.json())
        .then((data) => setGame(data));
    }
  }, [id]);

  if (!game) return <p>Cargando...</p>; // Indicador de carga mientras llegan los datos.

  return (
    <div style={{ padding: '20px' }}>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} style={{ maxWidth: '600px' }} />
      <p>{game.description_raw}</p>
      <p>Géneros: {game.genres.map((genre) => genre.name).join(', ')}</p>
      <p>Plataformas: {game.platforms.map((p) => p.platform.name).join(', ')}</p>
    </div>
  );
};

export default GameDetails;
