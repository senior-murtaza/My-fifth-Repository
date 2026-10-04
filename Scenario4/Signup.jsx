import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = [];

    if (form.username.length < 3) {
      newErrors.push("Username must be at least 3 characters.");
    }

    if (!form.email.includes("@")) {
      newErrors.push("Please enter a valid email.");
    }

    if (form.password.length < 8) {
      newErrors.push("Password must be at least 8 characters.");
    }

    if (form.password !== form.confirmPassword) {
      newErrors.push("Passwords do not match.");
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      setSuccess("Account created successfully!");

      setForm({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setSuccess("");
    }
  }

  return (
    <main className="page">
      <div className="signup-card">
        <h1>Join FitChallenge</h1>

        <p>Create your account and start your challenge.</p>

        <form onSubmit={handleSubmit}>
          <label>Username</label>

          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />

          <label>Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />

          {errors.length > 0 && (
            <div className="errors">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}

          {success && <p className="success">{success}</p>}

          <button type="submit" className="submit-button">
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}

export default Signup;
