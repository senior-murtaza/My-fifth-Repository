import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <nav>
      <h2>GameZone</h2>

      <div className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
}

export default App;
