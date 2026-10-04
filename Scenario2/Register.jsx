import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setSuccess("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (form.username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters.";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email.";
    }

    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Account created successfully!");

      setForm({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }

  return (
    <div className="form-container">
      <p className="small-title">JOIN GAMEZONE</p>

      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <label>Username</label>

        <input
          name="username"
          placeholder="Your username"
          value={form.username}
          onChange={handleChange}
        />

        {errors.username && <p className="error">{errors.username}</p>}

        <label>Email</label>

        <input
          name="email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
        />

        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>

        <input
          name="password"
          type="password"
          placeholder="At least 8 characters"
          value={form.password}
          onChange={handleChange}
        />

        {errors.password && <p className="error">{errors.password}</p>}

        <label>Confirm Password</label>

        <input
          name="confirmPassword"
          type="password"
          placeholder="Repeat your password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button type="submit">Create Account</button>

        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default Register;
