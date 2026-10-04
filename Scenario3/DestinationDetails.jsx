import { Link, useParams } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    type: "Europe",
    price: 120,
    description:
      "Explore famous streets, museums, cafés, and historic landmarks in the city of lights.",
  },
  {
    id: 2,
    name: "Tokyo",
    country: "Japan",
    type: "Asia",
    price: 180,
    description:
      "Experience modern technology, traditional culture, incredible food, and exciting city life.",
  },
  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    type: "Middle East",
    price: 100,
    description:
      "Enjoy modern architecture, desert adventures, shopping, and beautiful beaches.",
  },
  {
    id: 4,
    name: "Istanbul",
    country: "Turkey",
    type: "Europe",
    price: 80,
    description:
      "Discover a unique city connecting Europe and Asia with amazing history and food.",
  },
  {
    id: 5,
    name: "Bangkok",
    country: "Thailand",
    type: "Asia",
    price: 90,
    description:
      "Enjoy temples, markets, street food, and the energetic atmosphere of Bangkok.",
  },
  {
    id: 6,
    name: "Rome",
    country: "Italy",
    type: "Europe",
    price: 110,
    description:
      "Walk through ancient history and discover famous architecture, art, and Italian cuisine.",
  },
];

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find((item) => item.id === Number(id));

  if (!destination) {
    return (
      <div className="page">
        <h1>Destination Not Found</h1>

        <Link to="/destinations">Back to Destinations</Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <p className="eyebrow">{destination.type}</p>

      <h1>{destination.name}</h1>

      <p className="country">{destination.country}</p>

      <p className="details-description">{destination.description}</p>

      <div className="price-box">
        <span>Estimated daily cost</span>
        <strong>${destination.price}</strong>
      </div>

      <Link to="/plan" className="plan-button">
        Add to My Trip
      </Link>

      <br />
      <br />

      <Link to="/destinations">← Back to Destinations</Link>
    </div>
  );
}

export default DestinationDetails;
