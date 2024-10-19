import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Importa useRouter
import { fetchGames } from "../services/rawgApi";
import Link from 'next/link';
import Image from 'next/image'; // Importa el componente Image
import Spinner from '../components/Snipper'; // Ajusta la ruta si es necesario



export default function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { search } = router.query; // Obtener el término de búsqueda de la URL

  useEffect(() => {
    const loadGames = async () => {
      const data = await fetchGames();
      setGames(data);
      setLoading(false);
    };

    loadGames();
  }, []);

  // Filtrar los juegos por nombre si existe un término de búsqueda
  const filteredGames = search
    ? games.filter((game) => game.name.toLowerCase().includes(search.toLowerCase()))
    : games;
  
  [
    {
      id: 1,
      title: "The Legend of Zelda: Breath of the Wild",
      description: "Un juego de aventuras de mundo abierto aclamado por la crítica.",
      platform: "Nintendo Switch",
      genre: "Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 2,
      title: "Red Dead Redemption 2",
      description: "Una épica historia del Salvaje Oeste con un mundo inmersivo.",
      platform: "PlayStation 4, Xbox One, PC",
      genre: "Acción-Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 3,
      title: "Hades",
      description: "Un juego roguelike de acción con una narrativa única y arte impresionante.",
      platform: "PC, Nintendo Switch, PlayStation 5, Xbox Series X/S",
      genre: "Acción, Roguelike",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 4,
      title: "Minecraft",
      description: "Un juego de construcción y supervivencia con infinitas posibilidades.",
      platform: "Multiplataforma",
      genre: "Sandbox, Supervivencia",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 5,
      title: "Cyberpunk 2077",
      description: "Un RPG de mundo abierto ambientado en un futuro distópico.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "RPG, Acción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 6,
      title: "Among Us",
      description: "Un juego multijugador de deducción social en el espacio.",
      platform: "PC, iOS, Android, Nintendo Switch",
      genre: "Multijugador, Deducción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 7,
      title: "The Witcher 3: Wild Hunt",
      description: "Un RPG de mundo abierto con una narrativa profunda y decisiones impactantes.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "RPG",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 8,
      title: "Stardew Valley",
      description: "Un juego de simulación de granja con elementos de RPG.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android",
      genre: "Simulación, RPG",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 9,
      title: "Overwatch",
      description: "Un shooter en equipo con héroes únicos y habilidades especiales.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
      genre: "Shooter",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 10,
      title: "Civilization VI",
      description: "Un juego de estrategia por turnos donde construyes un imperio.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS",
      genre: "Estrategia",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 11,
      title: "Hollow Knight",
      description: "Un juego de plataformas y acción 2D con un mundo hermoso y desafiante.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
      genre: "Metroidvania",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 12,
      title: "Fortnite",
      description: "Un battle royale gratuito con elementos de construcción.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch, iOS, Android",
      genre: "Battle Royale",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 13,
      title: "Disco Elysium",
      description: "Un RPG narrativo con un sistema de habilidades único y diálogos profundos.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "RPG",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 14,
      title: "Rocket League",
      description: "Un juego de fútbol con coches propulsados por cohetes.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "Deportes, Acción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 15,
      title: "Persona 5 Royal",
      description: "Un RPG japonés con elementos de simulación social y mazmorras.",
      platform: "PlayStation 4, PC",
      genre: "JRPG",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 16,
      title: "Doom Eternal",
      description: "Un frenético shooter en primera persona contra hordas demoníacas.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "FPS",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 17,
      title: "Animal Crossing: New Horizons",
      description: "Un juego de simulación de vida en una isla paradisíaca.",
      platform: "Nintendo Switch",
      genre: "Simulación",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 18,
      title: "Celeste",
      description: "Un desafiante juego de plataformas con una historia emotiva.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
      genre: "Plataformas",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 19,
      title: "Death Stranding",
      description: "Una aventura única de entrega de paquetes en un mundo post-apocalíptico.",
      platform: "PC, PlayStation 4/5",
      genre: "Acción, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 20,
      title: "Factorio",
      description: "Un juego de gestión y construcción de fábricas en un planeta alienígena.",
      platform: "PC",
      genre: "Estrategia, Simulación",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 21,
      title: "Sekiro: Shadows Die Twice",
      description: "Un juego de acción y aventura ambientado en el Japón feudal.",
      platform: "PC, PlayStation 4, Xbox One",
      genre: "Acción, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 22,
      title: "Valorant",
      description: "Un shooter táctico 5v5 con personajes únicos y habilidades especiales.",
      platform: "PC",
      genre: "FPS, Táctico",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 23,
      title: "Outer Wilds",
      description: "Una aventura de exploración espacial con un bucle temporal único.",
      platform: "PC, PlayStation 4, Xbox One",
      genre: "Aventura, Exploración",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 24,
      title: "Halo: The Master Chief Collection",
      description: "Una colección de los juegos clásicos de Halo remasterizados.",
      platform: "PC, Xbox One",
      genre: "FPS",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 25,
      title: "Slay the Spire",
      description: "Un juego de cartas roguelike con combates estratégicos.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android",
      genre: "Estrategia, Roguelike",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 26,
      title: "Genshin Impact",
      description: "Un RPG de acción de mundo abierto con elementos gacha.",
      platform: "PC, PlayStation 4/5, iOS, Android",
      genre: "RPG, Acción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 27,
      title: "Crusader Kings III",
      description: "Un juego de estrategia y simulación de dinastías medievales.",
      platform: "PC",
      genre: "Estrategia, Simulación",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 28,
      title: "Fall Guys: Ultimate Knockout",
      description: "Un battle royale multijugador con mini-juegos divertidos.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "Battle Royale, Multijugador",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 29,
      title: "Ori and the Will of the Wisps",
      description: "Un hermoso juego de plataformas y aventuras con una historia emotiva.",
      platform: "PC, Xbox One, Nintendo Switch",
      genre: "Plataformas, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 30,
      title: "Divinity: Original Sin 2",
      description: "Un RPG por turnos con una narrativa profunda y libertad de elección.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
      genre: "RPG",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 31,
      title: "Control",
      description: "Un juego de acción y aventura con elementos sobrenaturales.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "Acción, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 32,
      title: "Apex Legends",
      description: "Un battle royale gratuito con héroes únicos y habilidades especiales.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "Battle Royale, FPS",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 33,
      title: "Subnautica",
      description: "Un juego de supervivencia y exploración submarina en un planeta alienígena.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "Supervivencia, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 34,
      title: "Undertale",
      description: "Un RPG único donde puedes elegir no luchar contra nadie.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
      genre: "RPG, Indie",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 35,
      title: "Terraria",
      description: "Un juego de aventuras y crafting 2D con elementos de sandbox.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android",
      genre: "Sandbox, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 36,
      title: "Nier: Automata",
      description: "Un RPG de acción con una narrativa profunda y múltiples finales.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
      genre: "RPG, Acción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 37,
      title: "Rimworld",
      description: "Un simulador de colonia con narrativas generadas proceduralmente.",
      platform: "PC",
      genre: "Simulación, Estrategia",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 38,
      title: "Hades",
      description: "Un roguelike de acción con una narrativa única y arte impresionante.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "Roguelike, Acción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 39,
      title: "Resident Evil Village",
      description: "La última entrega de la famosa serie de survival horror.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "Survival Horror",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 40,
      title: "Valheim",
      description: "Un juego de supervivencia y exploración inspirado en la mitología nórdica.",
      platform: "PC",
      genre: "Supervivencia, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 41,
      title: "Assassin's Creed Valhalla",
      description: "Una aventura vikinga en la Inglaterra del siglo IX.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "Acción, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 42,
      title: "Phasmophobia",
      description: "Un juego de terror  cooperativo de caza de fantasmas.",
      platform: "PC",
      genre: "Terror, Cooperativo",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 43,
      title: "Satisfactory",
      description: "Un juego de construcción de fábricas en primera persona.",
      platform: "PC",
      genre: "Simulación, Construcción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 44,
      title: "Stardew Valley",
      description: "Un juego de simulación de granja con elementos de RPG.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch, iOS, Android",
      genre: "Simulación, RPG",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 45,
      title: "Kerbal Space Program",
      description: "Un simulador de programa espacial con física realista.",
      platform: "PC, PlayStation 4, Xbox One",
      genre: "Simulación, Sandbox",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 46,
      title: "Hollow Knight",
      description: "Un juego de plataformas y acción 2D con un mundo hermoso y desafiante.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
      genre: "Metroidvania",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 47,
      title: "Disco Elysium",
      description: "Un RPG narrativo con un sistema de habilidades único y diálogos profundos.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "RPG",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 48,
      title: "Factorio",
      description: "Un juego de gestión y construcción de fábricas en un planeta alienígena.",
      platform: "PC",
      genre: "Estrategia, Simulación",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 49,
      title: "Outer Wilds",
      description: "Una aventura de exploración espacial con un bucle temporal único.",
      platform: "PC, PlayStation 4, Xbox One",
      genre: "Aventura, Exploración",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 50,
      title: "Halo Infinite",
      description: "La última entrega de la icónica serie de shooters de ciencia ficción.",
      platform: "PC, Xbox One, Xbox Series X/S",
      genre: "FPS",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 51,
      title: "Elden Ring",
      description: "Un RPG de acción en un vasto mundo abierto creado por FromSoftware y George R.R. Martin.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "RPG, Acción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 52,
      title: "Deathloop",
      description: "Un juego de acción en primera persona con un bucle temporal único.",
      platform: "PC, PlayStation 5",
      genre: "FPS, Acción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 53,
      title: "It Takes Two",
      description: "Una aventura cooperativa que desafía la forma en que jugamos juntos.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "Aventura, Cooperativo",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 54,
      title: "Ratchet & Clank: Rift Apart",
      description: "Una aventura de plataformas y acción con gráficos impresionantes.",
      platform: "PlayStation 5",
      genre: "Plataformas, Acción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 55,
      title: "Returnal",
      description: "Un shooter roguelike en tercera persona con elementos de ciencia ficción.",
      platform: "PlayStation 5",
      genre: "Roguelike, Shooter",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 56,
      title: "Psychonauts 2",
      description: "Una aventura de plataformas psicodélica con una historia única.",
      platform: "PC, PlayStation 4, Xbox One, Xbox Series X/S",
      genre: "Plataformas, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 57,
      title: "Metroid Dread",
      description: "La última entrega de la icónica serie de juegos de acción y exploración.",
      platform: "Nintendo Switch",
      genre: "Metroidvania",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 58,
      title: "Forza Horizon 5",
      description: "Un juego de carreras de mundo abierto ambientado en México.",
      platform: "PC, Xbox One, Xbox Series X/S",
      genre: "Carreras",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 59,
      title: "Kena: Bridge of Spirits",
      description: "Una aventura de acción con hermosos gráficos y una historia conmovedora.",
      platform: "PC, PlayStation 4/5",
      genre: "Acción, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 60,
      title: "Hitman 3",
      description: "La conclusión de la trilogía World of Assassination del Agente 47.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "Sigilo, Acción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 61,
      title: "Little Nightmares II",
      description: "Un juego de terror y puzles atmosférico con un estilo visual único.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "Terror, Puzles",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 62,
      title: "Chicory: A Colorful Tale",
      description: "Una aventura de pintura donde coloreas el mundo a tu alrededor.",
      platform: "PC, PlayStation 4/5, Nintendo Switch",
      genre: "Aventura, Indie",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 63,
      title: "Resident Evil Village",
      description: "La octava entrega principal de la famosa serie de survival horror.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "Survival Horror",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 64,
      title: "Valheim",
      description: "Un juego de supervivencia vikingo con elementos de crafting y exploración.",
      platform: "PC",
      genre: "Supervivencia, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 65,
      title: "Inscryption",
      description: "Un juego de cartas con elementos de escape room y terror psicológico.",
      platform: "PC",
      genre: "Cartas, Terror",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 66,
      title: "The Forgotten City",
      description: "Un juego de misterio basado en un mod popular de Skyrim.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "Aventura, Misterio",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 67,
      title: "Unpacking",
      description: "Un juego de puzles zen sobre desempacar cajas y organizar una casa.",
      platform: "PC, Xbox One, Nintendo Switch",
      genre: "Puzles, Indie",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 68,
      title: "Guilty Gear Strive",
      description: "La última entrega de la famosa serie de juegos de lucha.",
      platform: "PC, PlayStation 4/5",
      genre: "Lucha",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 69,
      title: "Loop Hero",
      description: "Un juego de rol y estrategia con mecánicas de bucle temporal.",
      platform: "PC, Nintendo Switch",
      genre: "RPG, Estrategia",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 70,
      title: "Knockout City",
      description: "Un juego multijugador de deportes basado en el dodgeball.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "Deportes, Multijugador",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 71,
      title: "Scarlet Nexus",
      description: "Un RPG de acción con elementos psíquicos y una historia de ciencia ficción.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "RPG, Acción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 72,
      title: "Chivalry 2",
      description: "Un juego de combate medieval multijugador en primera persona.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "Acción, Multijugador",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 73,
      title: "Biomutant",
      description: "Un RPG de mundo abierto con combate de artes marciales y criaturas mutantes.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "RPG, Acción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 74,
      title: "Humankind",
      description: "Un juego de estrategia 4X que abarca toda la historia de la humanidad.",
      platform: "PC",
      genre: "Estrategia",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 75,
      title: "New World",
      description: "Un MMO de mundo abierto ambientado en una tierra colonial sobrenatural.",
      platform: "PC",
      genre: "MMO, RPG",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 76,
      title: "Riders Republic",
      description: "Un juego de deportes extremos de mundo abierto con múltiples disciplinas.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "Deportes, Multijugador",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 77,
      title: "The Medium",
      description: "Un juego de terror psicológico con mecánicas de dos mundos simultáneos.",
      platform: "PC, Xbox Series X/S, PlayStation 5",
      genre: "Terror, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 78,
      title: "Outriders",
      description: "Un shooter looter cooperativo con elementos RPG y poderes sobrenaturales.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "Shooter, RPG",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 79,
      title: "Sable",
      description: "Un juego de exploración con un estilo artístico único inspirado en cómics.",
      platform: "PC, Xbox One, Xbox Series X/S",
      genre: "Aventura, Indie",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 80,
      title: "Twelve Minutes",
      description: "Un thriller interactivo con un bucle temporal de 12 minutos.",
      platform: "PC, Xbox One, Xbox Series X/S",
      genre: "Aventura, Indie",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 81,
      title: "Back 4 Blood",
      description: "Un shooter cooperativo de zombies de los creadores de Left 4 Dead.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "FPS, Cooperativo",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 82,
      title: "Age of Empires IV",
      description: "La esperada secuela de la icónica serie de estrategia en tiempo real.",
      platform: "PC",
      genre: "Estrategia",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 83,
      title: "Eastward",
      description: "Un juego de rol y aventuras con gráficos pixel art y una historia conmovedora.",
      platform: "PC, Nintendo Switch",
      genre: "RPG, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 84,
      title: "Axiom Verge 2",
      description: "La secuela del aclamado metroidvania de ciencia ficción.",
      platform: "PC, PlayStation 4/5, Nintendo Switch",
      genre: "Metroidvania",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 85,
      title: "Ghostwire: Tokyo",
      description: "Una aventura de acción sobrenatural ambientada en un Tokio embrujado.",
      platform: "PC, PlayStation 5",
      genre: "Acción, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 86,
      title: "Solar Ash",
      description: "Un juego de plataformas y acción 3D de los creadores de Hyper Light Drifter.",
      platform: "PC, PlayStation 4/5",
      genre: "Acción, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 87,
      title: "Sifu",
      description: "Un juego de artes marciales con un innovador sistema de envejecimiento.",
      platform: "PC, PlayStation 4/5",
      genre: "Acción, Lucha",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 88,
      title: "Lemnis Gate",
      description: "Un innovador shooter por turnos con bucles temporales.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S",
      genre: "FPS, Estrategia",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 89,
      title: "The Ascent",
      description: "Un RPG de acción cyberpunk con vista isométrica y combate frenético.",
      platform: "PC, Xbox One, Xbox Series X/S",
      genre: "RPG, Acción",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 90,
      title: "Boyfriend Dungeon",
      description: "Un juego de citas donde tus armas se convierten en personas atractivas.",
      platform: "PC, Nintendo Switch",
      genre: "RPG, Simulación",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 91,
      title: "Mundaun",
      description: "Un juego de terror dibujado a mano ambientado en los Alpes suizos.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "Terror, Aventura",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 92,
      title: "Maquette",
      description: "Un juego de puzles en primera persona con un mundo recursivo.",
      platform: "PC, PlayStation 4/5",
      genre: "Puzles",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 93,
      title: "Fights in Tight Spaces",
      description: "Un juego de estrategia por turnos que mezcla combate y construcción de mazos.",
      platform: "PC, Xbox One",
      genre: "Estrategia, Cartas",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 94,
      title: "Eldest Souls",
      description: "Un juego de jefes desafiante con combate pixelado y brutal.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "Acción, Indie",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 95,
      title: "Cris Tales",
      description: "Un RPG por turnos inspirado en los clásicos con mecánicas de viaje en el tiempo.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "RPG",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 96,
      title: "Griftlands",
      description: "Un juego de cartas roguelike con negociación y combate.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
      genre: "Cartas, Roguelike",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 97,
      title: "Minute of Islands",
      description: "Una aventura narrativa con un estilo artístico único y una historia intrigante.",
      platform: "PC, PlayStation 4, Xbox One, Nintendo Switch",
      genre: "Aventura, Indie",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 98,
      title: "Boomerang X",
      description: "Un frenético juego de acción en primera persona centrado en lanzar un boomerang.",
      platform: "PC, Nintendo Switch",
      genre: "Acción, Indie",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 99,
      title: "Backbone",
      description: "Un noir detectivesco protagonizado por un mapache en una Vancouver distópica.",
      platform: "PC, PlayStation 4/5, Xbox One, Xbox Series X/S, Nintendo Switch",
      genre: "Aventura, Indie",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 100,
      title: "Toem",
      description: "Una aventura fotográfica dibujada a mano con puzles y personajes encantadores.",
      platform: "PC, PlayStation 5, Nintendo Switch",
      genre: "Aventura, Indie",
      image: "/placeholder.svg?height=200&width=300"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8 text-center">Catálogo de Juegos</h1>
    {loading ? (
      <Spinner /> // Muestra el Spinner mientras carga
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <Image 
              src={game.background_image} 
              alt={game.name} 
              width={400} 
              height={160} 
              className="w-full h-40 object-cover" 
              placeholder="blur" // Opcional: placeholder para mejorar el rendimiento
              blurDataURL="/placeholder.svg" // Opcional: puedes cambiar la URL del placeholder
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-2 line-clamp-1">{game.name}</h2>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{game.description || "Descripción no disponible"}</p>
                <p className="text-xs text-gray-500 mb-1">Plataformas: {game.platforms.map((platform) => platform.platform.name).join(', ')}</p>
                <p className="text-xs text-gray-500 mb-2">Género: {game.genres.map((genre) => genre.name).join(', ')}</p>
              </div>
              <Link href={`/games/${game.id}`}>
                <span className="inline-block w-full bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600 transition duration-300">
                  Más información
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    )}
    </div>
  );
}