import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (form.name.trim().length < 2) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Please enter a valid email.";
    }

    if (
      form.guests === "" ||
      Number(form.guests) < 1 ||
      Number(form.guests) > 20
    ) {
      newErrors.guests = "Guests must be between 1 and 20.";
    }

    if (form.date === "") {
      newErrors.date = "Please select a date.";
    }

    if (form.time === "") {
      newErrors.time = "Please select a time.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/success", {
        state: form,
      });
    }
  }

  return (
    <div className="form-container">
      <h1>Reserve a Table</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />

        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email</label>

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />

        {errors.email && <p className="error">{errors.email}</p>}

        <label>Number of guests</label>

        <input
          name="guests"
          type="number"
          value={form.guests}
          onChange={handleChange}
          placeholder="Number of guests"
        />

        {errors.guests && <p className="error">{errors.guests}</p>}

        <label>Date</label>

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />

        {errors.date && <p className="error">{errors.date}</p>}

        <label>Time</label>

        <input
          name="time"
          type="time"
          value={form.time}
          onChange={handleChange}
        />

        {errors.time && <p className="error">{errors.time}</p>}

        <button type="submit">Reserve Table</button>
      </form>
    </div>
  );
}

export default Reservation;
