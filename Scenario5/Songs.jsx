import { useState } from "react";
import { Link } from "react-router-dom";

const songs = [
  {
    id: 1,
    title: "Midnight Drive",
    artist: "Alex Morgan",
    genre: "Pop",
    duration: "3:42",
  },
  {
    id: 2,
    title: "Lost in Time",
    artist: "Daniel Stone",
    genre: "Rock",
    duration: "4:10",
  },
  {
    id: 3,
    title: "Ocean Dreams",
    artist: "Luna Ray",
    genre: "Chill",
    duration: "3:25",
  },
  {
    id: 4,
    title: "City Lights",
    artist: "James Cole",
    genre: "Electronic",
    duration: "3:58",
  },
  {
    id: 5,
    title: "Golden Sky",
    artist: "Mia Carter",
    genre: "Pop",
    duration: "4:02",
  },
  {
    id: 6,
    title: "Dark Roads",
    artist: "Ryan Blake",
    genre: "Rock",
    duration: "3:51",
  },
];

function Songs() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  function toggleFavorite(id) {
    let updated;

    if (favorites.includes(id)) {
      updated = favorites.filter((item) => item !== id);
    } else {
      updated = [...favorites, id];
    }

    setFavorites(updated);

    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  const filteredSongs = songs.filter((song) => {
    const matchesSearch =
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase());

    const matchesGenre = genre === "All" || song.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <h1>All Songs</h1>
          <p>Find your favorite music.</p>
        </div>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by song or artist..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="All">All Genres</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Chill">Chill</option>
          <option value="Electronic">Electronic</option>
        </select>
      </div>

      <div className="song-grid">
        {filteredSongs.map((song) => {
          const isFavorite = favorites.includes(song.id);

          return (
            <div className="song-card" key={song.id}>
              <div className="song-top">
                <div className="song-symbol">♫</div>

                <button
                  className="favorite-button"
                  onClick={() => toggleFavorite(song.id)}
                >
                  {isFavorite ? "♥" : "♡"}
                </button>
              </div>

              <h2>{song.title}</h2>

              <p className="artist">{song.artist}</p>

              <div className="song-info">
                <span>{song.genre}</span>
                <span>{song.duration}</span>
              </div>

              <Link to={`/songs/${song.id}`} className="details-button">
                View Details
              </Link>
            </div>
          );
        })}
      </div>

      {filteredSongs.length === 0 && (
        <p className="empty">No songs match your search.</p>
      )}
    </main>
  );
}

export default Songs;
