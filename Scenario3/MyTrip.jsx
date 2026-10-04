import { Link, useLocation } from "react-router-dom";

function MyTrip() {
  const location = useLocation();

  const trip = location.state;

  if (!trip) {
    return (
      <div className="page empty">
        <h1>No Trip Planned</h1>

        <p>Create your trip before viewing your itinerary.</p>

        <Link to="/plan" className="plan-button">
          Plan a Trip
        </Link>
      </div>
    );
  }

  const activityTotal = trip.activities.reduce(
    (sum, activity) => sum + activity.price,
    0,
  );

  const baseCost = Number(trip.days) * Number(trip.travelers) * 100;

  const total = baseCost + activityTotal * Number(trip.travelers);

  return (
    <div className="page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">YOUR ADVENTURE</p>
          <h1>My Trip</h1>
        </div>
      </div>

      <div className="trip-card">
        <div className="trip-header">
          <div>
            <span>DESTINATION</span>
            <h2>{trip.destination}</h2>
          </div>

          <div>
            <span>DURATION</span>
            <h2>{trip.days} days</h2>
          </div>

          <div>
            <span>TRAVELERS</span>
            <h2>{trip.travelers}</h2>
          </div>
        </div>

        <hr />

        <h3>Activities</h3>

        {trip.activities.map((activity) => (
          <div className="trip-activity" key={activity.name}>
            <span>{activity.name}</span>
            <strong>${activity.price}</strong>
          </div>
        ))}

        <div className="total">
          <span>Estimated Total</span>
          <strong>${total}</strong>
        </div>
      </div>

      <Link to="/plan" className="plan-button">
        Edit Trip
      </Link>
    </div>
  );
}

export default MyTrip;
