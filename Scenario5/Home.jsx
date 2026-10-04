import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="page">
      <section className="hero">
        <span className="music-icon">♫</span>

        <h1>Welcome to MusicBox</h1>

        <p>
          Discover songs, create your own playlist, and save your favorite
          music.
        </p>

        <div className="hero-buttons">
          <Link to="/songs" className="main-button">
            Explore Songs
          </Link>

          <Link to="/playlist" className="secondary-button">
            My Playlist
          </Link>
        </div>
      </section>

      <section className="home-cards">
        <div className="info-card">
          <h3>🎵 Discover</h3>
          <p>Search through different songs and explore their details.</p>
        </div>

        <div className="info-card">
          <h3>❤️ Favorites</h3>
          <p>Save the songs you like and keep them in your playlist.</p>
        </div>

        <div className="info-card">
          <h3>➕ Create</h3>
          <p>Add your own songs to your personal music collection.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
