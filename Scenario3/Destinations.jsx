import { useState } from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    type: "Europe",
    price: 120,
  },
  {
    id: 2,
    name: "Tokyo",
    country: "Japan",
    type: "Asia",
    price: 180,
  },
  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    type: "Middle East",
    price: 100,
  },
  {
    id: 4,
    name: "Istanbul",
    country: "Turkey",
    type: "Europe",
    price: 80,
  },
  {
    id: 5,
    name: "Bangkok",
    country: "Thailand",
    type: "Asia",
    price: 90,
  },
  {
    id: 6,
    name: "Rome",
    country: "Italy",
    type: "Europe",
    price: 110,
  },
];

function Destinations() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(search.toLowerCase()) ||
      destination.country.toLowerCase().includes(search.toLowerCase());

    const matchesType = type === "All" || destination.type === type;

    return matchesSearch && matchesType;
  });

  return (
    <div className="page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">EXPLORE</p>
          <h1>Destinations</h1>
        </div>

        <p>{filteredDestinations.length} places</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="All">All Regions</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Middle East">Middle East</option>
        </select>
      </div>

      <div className="destination-grid">
        {filteredDestinations.map((destination) => (
          <div className="destination-card" key={destination.id}>
            <span className="destination-number">0{destination.id}</span>

            <p>{destination.type}</p>

            <h2>{destination.name}</h2>

            <span>{destination.country}</span>

            <div className="destination-bottom">
              <strong>From ${destination.price}/day</strong>

              <Link to={`/destinations/${destination.id}`}>Explore →</Link>
            </div>
          </div>
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="empty">
          <h2>No destinations found</h2>
          <p>Try another search.</p>
        </div>
      )}
    </div>
  );
}

export default Destinations;
