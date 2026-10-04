import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <nav>
      <h2>TravelMate</h2>

      <div className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/destinations">Destinations</NavLink>
        <NavLink to="/plan">Plan Trip</NavLink>
        <NavLink to="/my-trip">My Trip</NavLink>
      </div>
    </nav>
  );
}

export default App;
