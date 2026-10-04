import { Link, useParams } from "react-router-dom";

const games = [
  {
    id: 1,
    title: "Cyber Warriors",
    genre: "Action",
    rating: 4.8,
    year: 2025,
    description:
      "Enter a futuristic world and fight against powerful enemies in this fast-paced action game.",
  },
  {
    id: 2,
    title: "Speed Legends",
    genre: "Racing",
    rating: 4.5,
    year: 2024,
    description:
      "Race through challenging tracks and compete against the fastest drivers.",
  },
  {
    id: 3,
    title: "Kingdom Rise",
    genre: "Strategy",
    rating: 4.7,
    year: 2023,
    description:
      "Build your kingdom, manage your resources, and create a powerful army.",
  },
  {
    id: 4,
    title: "Space Mission",
    genre: "Adventure",
    rating: 4.3,
    year: 2025,
    description:
      "Explore unknown planets and discover the secrets of deep space.",
  },
  {
    id: 5,
    title: "Street Fighter",
    genre: "Fighting",
    rating: 4.6,
    year: 2022,
    description:
      "Choose your fighter and compete in intense one-on-one battles.",
  },
  {
    id: 6,
    title: "Mystery House",
    genre: "Adventure",
    rating: 4.4,
    year: 2024,
    description:
      "Investigate a mysterious house and solve challenging puzzles.",
  },
];

function GameDetails() {
  const { id } = useParams();

  const game = games.find((game) => game.id === Number(id));

  if (!game) {
    return (
      <div className="page">
        <h1>Game Not Found</h1>

        <Link to="/games">Back to Games</Link>
      </div>
    );
  }

  return (
    <div className="details">
      <p className="small-title">{game.genre}</p>

      <h1>{game.title}</h1>

      <div className="details-stats">
        <div>
          <span>Rating</span>
          <strong>⭐ {game.rating}</strong>
        </div>

        <div>
          <span>Released</span>
          <strong>{game.year}</strong>
        </div>

        <div>
          <span>Genre</span>
          <strong>{game.genre}</strong>
        </div>
      </div>

      <p className="description">{game.description}</p>

      <button className="favorite-button">♡ Add to Favorites</button>

      <br />
      <br />

      <Link to="/games" className="back-link">
        ← Back to Games
      </Link>
    </div>
  );
}

export default GameDetails;
