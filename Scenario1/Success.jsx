import { Link, useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();

  const reservation = location.state;

  if (!reservation) {
    return (
      <div className="page">
        <h1>No Reservation Found</h1>

        <Link to="/reservation">
          Make a Reservation
        </Link>
      </div>
    );
  }

  return (
    <div className="success-page">
      <h1>Reservation Confirmed! 🎉</h1>

      <div className="reservation-card">
        <h2>Reservation Details</h2>

        <p>
          <strong>Name:</strong> {reservation.name}
        </p>

        <p>
          <strong>Email:</strong> {reservation.email}
        </p>

        <p>
          <strong>Guests:</strong> {reservation.guests}
        </p>

        <p>
          <strong>Date:</strong> {reservation.date}
        </p>

        <p>
          <strong>Time:</strong> {reservation.time}
        </p>
      </div>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Success;