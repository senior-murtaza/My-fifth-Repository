import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <nav>
      <h2>FoodHouse</h2>

      <div className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/reservation">Reservation</NavLink>
      </div>
    </nav>
  );
}

export default App;
