import { useState } from "react";
import { Link } from "react-router-dom";

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

function Workouts() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const [completed, setCompleted] = useState(() => {
    return JSON.parse(localStorage.getItem("completedWorkouts")) || [];
  });

  function toggleComplete(id) {
    let updated;

    if (completed.includes(id)) {
      updated = completed.filter((item) => item !== id);
    } else {
      updated = [...completed, id];
    }

    setCompleted(updated);

    localStorage.setItem(
      "completedWorkouts",
      JSON.stringify(updated)
    );
  }

  const filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch = workout.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === "All" || workout.difficulty === difficulty;

    return matchesSearch && matchesDifficulty;
  });

  return (
    <main className="page">
      <h1>Workouts</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search workouts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="All">All Levels</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="workout-grid">
        {filteredWorkouts.map((workout) => {
          const isCompleted = completed.includes(workout.id);

          return (
            <div className="workout-card" key={workout.id}>
              <span className={`badge ${workout.difficulty.toLowerCase()}`}>
                {workout.difficulty}
              </span>

              <h2>{workout.name}</h2>

              <p>{workout.description}</p>

              <div className="workout-info">
                <span>⏱ {workout.duration} min</span>
                <span>⭐ {workout.points} points</span>
              </div>

              <div className="card-buttons">
                <Link to={`/workouts/${workout.id}`}>
                  Details
                </Link>

                <button
                  onClick={() => toggleComplete(workout.id)}
                  className={isCompleted ? "completed" : ""}
                >
                  {isCompleted ? "Completed ✓" : "Complete"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredWorkouts.length === 0 && (
        <p className="empty">No workouts found.</p>
      )}
    </main>
  );
}

export default Workouts;