import { useState } from "react";
import { Link } from "react-router-dom";

const songs = [
  {
    id: 1,
    title: "Midnight Drive",
    artist: "Alex Morgan",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Lost in Time",
    artist: "Daniel Stone",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Ocean Dreams",
    artist: "Luna Ray",
    genre: "Chill",
  },
  {
    id: 4,
    title: "City Lights",
    artist: "James Cole",
    genre: "Electronic",
  },
  {
    id: 5,
    title: "Golden Sky",
    artist: "Mia Carter",
    genre: "Pop",
  },
  {
    id: 6,
    title: "Dark Roads",
    artist: "Ryan Blake",
    genre: "Rock",
  },
];

function Playlist() {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const favoriteSongs = songs.filter((song) => favorites.includes(song.id));

  function removeFavorite(id) {
    const updated = favorites.filter((item) => item !== id);

    setFavorites(updated);

    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <h1>My Playlist</h1>
          <p>Your saved favorite songs.</p>
        </div>

        <strong className="playlist-count">{favoriteSongs.length} Songs</strong>
      </div>

      {favoriteSongs.length === 0 ? (
        <div className="empty-playlist">
          <div className="empty-icon">♫</div>

          <h2>Your playlist is empty</h2>

          <p>Go to the songs page and add some favorites.</p>

          <Link to="/songs" className="main-button">
            Find Songs
          </Link>
        </div>
      ) : (
        <div className="playlist">
          {favoriteSongs.map((song) => (
            <div className="playlist-item" key={song.id}>
              <div className="playlist-icon">♫</div>

              <div className="playlist-info">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>

              <span className="playlist-genre">{song.genre}</span>

              <Link to={`/songs/${song.id}`} className="small-button">
                Details
              </Link>

              <button
                className="remove-button"
                onClick={() => removeFavorite(song.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Playlist;
