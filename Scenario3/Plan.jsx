import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Plan() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    destination: "",
    days: "",
    travelers: "",
  });

  const [activities, setActivities] = useState([]);

  const [errors, setErrors] = useState({});

  const activityOptions = [
    {
      name: "City Tour",
      price: 30,
    },
    {
      name: "Museum Visit",
      price: 20,
    },
    {
      name: "Food Tour",
      price: 40,
    },
    {
      name: "Adventure Activity",
      price: 60,
    },
  ];

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function toggleActivity(activity) {
    const exists = activities.some((item) => item.name === activity.name);

    if (exists) {
      setActivities(activities.filter((item) => item.name !== activity.name));
    } else {
      setActivities([...activities, activity]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!form.destination) {
      newErrors.destination = "Please choose a destination.";
    }

    if (!form.days || Number(form.days) < 1 || Number(form.days) > 30) {
      newErrors.days = "Days must be between 1 and 30.";
    }

    if (
      !form.travelers ||
      Number(form.travelers) < 1 ||
      Number(form.travelers) > 20
    ) {
      newErrors.travelers = "Travelers must be between 1 and 20.";
    }

    if (activities.length === 0) {
      newErrors.activities = "Choose at least one activity.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/my-trip", {
        state: {
          ...form,
          activities,
        },
      });
    }
  }

  const activityTotal = activities.reduce(
    (sum, activity) => sum + activity.price,
    0,
  );

  return (
    <div className="form-container planner">
      <p className="eyebrow">BUILD YOUR ADVENTURE</p>

      <h1>Plan Your Trip</h1>

      <form onSubmit={handleSubmit}>
        <label>Destination</label>

        <select
          name="destination"
          value={form.destination}
          onChange={handleChange}
        >
          <option value="">Choose destination</option>
          <option value="Paris">Paris</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Dubai">Dubai</option>
          <option value="Istanbul">Istanbul</option>
          <option value="Bangkok">Bangkok</option>
          <option value="Rome">Rome</option>
        </select>

        {errors.destination && <p className="error">{errors.destination}</p>}

        <label>Number of days</label>

        <input
          type="number"
          name="days"
          placeholder="Example: 7"
          value={form.days}
          onChange={handleChange}
        />

        {errors.days && <p className="error">{errors.days}</p>}

        <label>Number of travelers</label>

        <input
          type="number"
          name="travelers"
          placeholder="Example: 2"
          value={form.travelers}
          onChange={handleChange}
        />

        {errors.travelers && <p className="error">{errors.travelers}</p>}

        <label>Select activities</label>

        <div className="activities">
          {activityOptions.map((activity) => {
            const selected = activities.some(
              (item) => item.name === activity.name,
            );

            return (
              <div
                className={selected ? "activity selected" : "activity"}
                key={activity.name}
                onClick={() => toggleActivity(activity)}
              >
                <div>
                  <strong>{activity.name}</strong>
                  <span>${activity.price}</span>
                </div>

                <span>{selected ? "✓" : "+"}</span>
              </div>
            );
          })}
        </div>

        {errors.activities && <p className="error">{errors.activities}</p>}

        <div className="activity-total">Activity cost: ${activityTotal}</div>

        <button type="submit">Create My Trip</button>
      </form>
    </div>
  );
}

export default Plan;
