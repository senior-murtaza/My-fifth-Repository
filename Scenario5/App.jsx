import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <nav>
      <h2>MusicBox</h2>

      <div className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/songs">Songs</NavLink>
        <NavLink to="/playlist">Playlist</NavLink>
        <NavLink to="/add-song">Add Song</NavLink>
      </div>
    </nav>
  );
}

export default App;
