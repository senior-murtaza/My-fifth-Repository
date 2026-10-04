import { useState } from "react";

const foods = [
  {
    id: 1,
    name: "Classic Burger",
    price: 8,
    category: "Main",
  },
  {
    id: 2,
    name: "Chicken Pizza",
    price: 12,
    category: "Main",
  },
  {
    id: 3,
    name: "French Fries",
    price: 4,
    category: "Side",
  },
  {
    id: 4,
    name: "Chocolate Cake",
    price: 6,
    category: "Dessert",
  },
  {
    id: 5,
    name: "Fresh Juice",
    price: 3,
    category: "Drink",
  },
];

function Menu() {
  const [selected, setSelected] = useState([]);

  function addFood(food) {
    setSelected([...selected, food]);
  }

  function removeFood(index) {
    setSelected(selected.filter((_, foodIndex) => foodIndex !== index));
  }

  const total = selected.reduce((sum, food) => sum + food.price, 0);

  return (
    <div className="page">
      <h1>Our Menu</h1>

      <div className="food-grid">
        {foods.map((food) => (
          <div className="food-card" key={food.id}>
            <h2>{food.name}</h2>

            <p>{food.category}</p>

            <h3>${food.price}</h3>

            <button onClick={() => addFood(food)}>Add</button>
          </div>
        ))}
      </div>

      <div className="order">
        <h2>Your Selection</h2>

        {selected.length === 0 && <p>No food selected yet.</p>}

        {selected.map((food, index) => (
          <div className="selected-food" key={index}>
            <span>
              {food.name} — ${food.price}
            </span>

            <button onClick={() => removeFood(index)}>Remove</button>
          </div>
        ))}

        <h2>Total: ${total}</h2>
      </div>
    </div>
  );
}

export default Menu;
