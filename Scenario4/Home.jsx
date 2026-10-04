import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="page home-page">
      <section className="hero">
        <h1>Fitness Challenge</h1>

        <p>Complete workouts, earn points, and track your fitness progress.</p>

        <div className="home-buttons">
          <Link to="/workouts" className="button">
            Explore Workouts
          </Link>

          <Link to="/progress" className="button secondary">
            View Progress
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🏃 Workouts</h3>
          <p>Choose workouts based on difficulty and category.</p>
        </div>

        <div className="feature-card">
          <h3>⭐ Points</h3>
          <p>Complete workouts and collect points.</p>
        </div>

        <div className="feature-card">
          <h3>📊 Progress</h3>
          <p>See how much of the challenge you have completed.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
