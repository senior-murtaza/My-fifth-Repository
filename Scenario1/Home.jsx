import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>Welcome to FoodHouse</h1>

      <p>Delicious food, comfortable atmosphere, and easy reservations.</p>

      <div className="hero-buttons">
        <Link to="/menu">View Menu</Link>
        <Link to="/reservation">Reserve a Table</Link>
      </div>
    </div>
  );
}

export default Home;
