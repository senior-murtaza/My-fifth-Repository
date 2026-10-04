import { useState } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Cyber Warriors",
      genre: "Action",
    },
    {
      id: 2,
      title: "Speed Legends",
      genre: "Racing",
    },
  ]);

  function removeFavorite(id) {
    setFavorites(favorites.filter((game) => game.id !== id));
  }

  return (
    <div className="page">
      <div className="games-header">
        <div>
          <p className="small-title">YOUR COLLECTION</p>
          <h1>Favorites</h1>
        </div>

        <p>{favorites.length} saved</p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty">
          <h2>No favorites yet</h2>
          <p>Add games to your favorite collection.</p>
        </div>
      ) : (
        <div className="favorite-list">
          {favorites.map((game) => (
            <div className="favorite-card" key={game.id}>
              <div>
                <p>{game.genre}</p>
                <h2>{game.title}</h2>
              </div>

              <button onClick={() => removeFavorite(game.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
