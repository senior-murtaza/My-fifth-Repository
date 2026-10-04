import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const songs = [
  {
    id: 1,
    title: "Midnight Drive",
    artist: "Alex Morgan",
    genre: "Pop",
    duration: "3:42",
    year: 2025,
  },
  {
    id: 2,
    title: "Lost in Time",
    artist: "Daniel Stone",
    genre: "Rock",
    duration: "4:10",
    year: 2024,
  },
  {
    id: 3,
    title: "Ocean Dreams",
    artist: "Luna Ray",
    genre: "Chill",
    duration: "3:25",
    year: 2026,
  },
  {
    id: 4,
    title: "City Lights",
    artist: "James Cole",
    genre: "Electronic",
    duration: "3:58",
    year: 2025,
  },
  {
    id: 5,
    title: "Golden Sky",
    artist: "Mia Carter",
    genre: "Pop",
    duration: "4:02",
    year: 2026,
  },
  {
    id: 6,
    title: "Dark Roads",
    artist: "Ryan Blake",
    genre: "Rock",
    duration: "3:51",
    year: 2024,
  },
];

function SongDetails() {
  const { id } = useParams();

  const song = songs.find((item) => item.id === Number(id));

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const isFavorite = favorites.includes(Number(id));

  function toggleFavorite() {
    let updated;

    if (isFavorite) {
      updated = favorites.filter((item) => item !== Number(id));
    } else {
      updated = [...favorites, Number(id)];
    }

    setFavorites(updated);

    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  if (!song) {
    return (
      <main className="page">
        <div className="not-found">
          <h1>Song Not Found</h1>

          <Link to="/songs" className="main-button">
            Back to Songs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="song-details">
        <div className="big-song-symbol">♫</div>

        <span className="genre-badge">{song.genre}</span>

        <h1>{song.title}</h1>

        <h3>{song.artist}</h3>

        <div className="detail-info">
          <div>
            <strong>Duration</strong>
            <span>{song.duration}</span>
          </div>

          <div>
            <strong>Genre</strong>
            <span>{song.genre}</span>
          </div>

          <div>
            <strong>Released</strong>
            <span>{song.year}</span>
          </div>
        </div>

        <button
          className={isFavorite ? "favorite-large active" : "favorite-large"}
          onClick={toggleFavorite}
        >
          {isFavorite ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
        </button>

        <Link to="/songs" className="back-link">
          ← Back to Songs
        </Link>
      </div>
    </main>
  );
}

export default SongDetails;
