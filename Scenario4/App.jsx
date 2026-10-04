import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <nav>
      <h2>FitChallenge</h2>

      <div className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/workouts">Workouts</NavLink>
        <NavLink to="/progress">Progress</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </nav>
  );
}

export default App;
