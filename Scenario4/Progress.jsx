import { useState } from "react";

const workouts = [
  { id: 1, name: "Morning Run", points: 20 },
  { id: 2, name: "Full Body Workout", points: 40 },
  { id: 3, name: "HIIT Challenge", points: 60 },
  { id: 4, name: "Core Training", points: 35 },
  { id: 5, name: "Stretch & Relax", points: 15 },
];

function Progress() {
  const [completed, setCompleted] = useState(() => {
    return JSON.parse(localStorage.getItem("completedWorkouts")) || [];
  });

  const completedWorkouts = workouts.filter((workout) =>
    completed.includes(workout.id),
  );

  const totalPoints = completedWorkouts.reduce(
    (total, workout) => total + workout.points,
    0,
  );

  const percentage = Math.round((completed.length / workouts.length) * 100);

  function resetProgress() {
    localStorage.removeItem("completedWorkouts");
    setCompleted([]);
  }

  return (
    <main className="page">
      <h1>Your Progress</h1>

      <div className="progress-card">
        <h2>{percentage}% Complete</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className="stats">
          <div>
            <strong>{completed.length}</strong>
            <span>Workouts</span>
          </div>

          <div>
            <strong>{totalPoints}</strong>
            <span>Points</span>
          </div>

          <div>
            <strong>{workouts.length}</strong>
            <span>Total</span>
          </div>
        </div>
      </div>

      <section className="completed-section">
        <h2>Completed Workouts</h2>

        {completedWorkouts.length === 0 ? (
          <p>You haven't completed any workouts yet.</p>
        ) : (
          completedWorkouts.map((workout) => (
            <div className="completed-item" key={workout.id}>
              <span>{workout.name}</span>
              <strong>+{workout.points} points</strong>
            </div>
          ))
        )}
      </section>

      <button className="reset-button" onClick={resetProgress}>
        Reset Progress
      </button>
    </main>
  );
}

export default Progress;
