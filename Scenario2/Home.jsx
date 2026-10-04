import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div>
        <p className="small-title">WELCOME TO GAMEZONE</p>

        <h1>
          Discover Your
          <br />
          Next Game
        </h1>

        <p className="hero-text">
          Explore games, find your favorites, and build your own collection.
        </p>

        <Link to="/games" className="main-button">
          Explore Games
        </Link>
      </div>
    </div>
  );
}

export default Home;
