import axios from 'axios';

const API_KEY = 'c0d4ff2de6834a6daf0aa751fc95f8fd';
const BASE_URL = 'https://api.rawg.io/api/games';

export const fetchGames = async (pageSize = 40, maxGames = 100) => {
  let games = [];
  let page = 1;

  try {
    while (games.length < maxGames) {
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          page,
          page_size: pageSize,
        },
      });

      games = [...games, ...response.data.results];
      page += 1;

      if (response.data.results.length < pageSize) break; // Para cuando se alcance el fin de los resultados
    }

    return games.slice(0, maxGames); // Limitar a los primeros 100 juegos
  } catch (error) {
    console.error("Error al obtener los juegos:", error);
    return [];
  }
};
