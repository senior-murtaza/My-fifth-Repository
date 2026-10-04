import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <p className="eyebrow">TRAVEL WITHOUT LIMITS</p>

        <h1>
          Plan your next
          <br />
          adventure.
        </h1>

        <p className="home-text">
          Discover amazing destinations, choose your
          activities, and build your perfect trip.
        </p>

        <div className="home-buttons">
          <Link to="/destinations">
            Explore Destinations
          </Link>

          <Link to="/plan">
            Start Planning
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;