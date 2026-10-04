import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const workouts = [
  {
    id: 1,
    name: "Morning Run",
    difficulty: "Easy",
    duration: 20,
    points: 20,
    category: "Cardio",
    description: "A simple running workout for beginners.",
  },
  {
    id: 2,
    name: "Full Body Workout",
    difficulty: "Medium",
    duration: 35,
    points: 40,
    category: "Strength",
    description: "A balanced workout for your whole body.",
  },
  {
    id: 3,
    name: "HIIT Challenge",
    difficulty: "Hard",
    duration: 30,
    points: 60,
    category: "Cardio",
    description: "A challenging high-intensity workout.",
  },
  {
    id: 4,
    name: "Core Training",
    difficulty: "Medium",
    duration: 25,
    points: 35,
    category: "Core",
    description: "Focus on improving your core strength.",
  },
  {
    id: 5,
    name: "Stretch & Relax",
    difficulty: "Easy",
    duration: 15,
    points: 15,
    category: "Flexibility",
    description: "A relaxing workout focused on stretching.",
  },
];

function WorkoutDetails() {
  const { id } = useParams();

  const workout = workouts.find(
    (item) => item.id === Number(id)
  );

  const [completed, setCompleted] = useState(() => {
    const saved =
      JSON.parse(localStorage.getItem("completedWorkouts")) || [];

    return saved.includes(Number(id));
  });

  function toggleComplete() {
    const saved =
      JSON.parse(localStorage.getItem("completedWorkouts")) || [];

    let updated;

    if (saved.includes(Number(id))) {
      updated = saved.filter((item) => item !== Number(id));
      setCompleted(false);
    } else {
      updated = [...saved, Number(id)];
      setCompleted(true);
    }

    localStorage.setItem(
      "completedWorkouts",
      JSON.stringify(updated)
    );
  }

  if (!workout) {
    return (
      <main className="page">
        <h1>Workout Not Found</h1>
        <Link to="/workouts" className="button">
          Back to Workouts
        </Link>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="details-card">
        <span className={`badge ${workout.difficulty.toLowerCase()}`}>
          {workout.difficulty}
        </span>

        <h1>{workout.name}</h1>

        <p>{workout.description}</p>

        <div className="details-info">
          <p>
            <strong>Category:</strong> {workout.category}
          </p>

          <p>
            <strong>Duration:</strong> {workout.duration} minutes
          </p>

          <p>
            <strong>Points:</strong> {workout.points}
          </p>
        </div>

        <button
          className={completed ? "completed large-button" : "large-button"}
          onClick={toggleComplete}
        >
          {completed ? "Workout Completed ✓" : "Mark as Complete"}
        </button>

        <br />

        <Link to="/workouts" className="back-link">
          ← Back to Workouts
        </Link>
      </div>
    </main>
  );
}

export default WorkoutDetails;