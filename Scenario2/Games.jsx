import { useState } from "react";
import { Link } from "react-router-dom";

const games = [
  {
    id: 1,
    title: "Cyber Warriors",
    genre: "Action",
    rating: 4.8,
    year: 2025,
  },
  {
    id: 2,
    title: "Speed Legends",
    genre: "Racing",
    rating: 4.5,
    year: 2024,
  },
  {
    id: 3,
    title: "Kingdom Rise",
    genre: "Strategy",
    rating: 4.7,
    year: 2023,
  },
  {
    id: 4,
    title: "Space Mission",
    genre: "Adventure",
    rating: 4.3,
    year: 2025,
  },
  {
    id: 5,
    title: "Street Fighter",
    genre: "Fighting",
    rating: 4.6,
    year: 2022,
  },
  {
    id: 6,
    title: "Mystery House",
    genre: "Adventure",
    rating: 4.4,
    year: 2024,
  },
];

function Games() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre = genre === "All" || game.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="page">
      <div className="games-header">
        <div>
          <p className="small-title">GAME LIBRARY</p>
          <h1>Explore Games</h1>
        </div>

        <p>{filteredGames.length} games found</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="All">All Genres</option>
          <option value="Action">Action</option>
          <option value="Racing">Racing</option>
          <option value="Strategy">Strategy</option>
          <option value="Adventure">Adventure</option>
          <option value="Fighting">Fighting</option>
        </select>
      </div>

      <div className="game-grid">
        {filteredGames.map((game) => (
          <div className="game-card" key={game.id}>
            <div className="game-number">0{game.id}</div>

            <p className="game-genre">{game.genre}</p>

            <h2>{game.title}</h2>

            <div className="game-info">
              <span>⭐ {game.rating}</span>
              <span>{game.year}</span>
            </div>

            <Link to={`/games/${game.id}`}>View Details →</Link>
          </div>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="empty">
          <h2>No games found</h2>
          <p>Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}

export default Games;
