import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    e.preventDefault();

    const newErrors = {};

    if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email.";
    }

    if (form.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Account created!");
    }
  }

  return (
    <div className="form-container">
      <h1>Create Account</h1>

      <form onSubmit={submit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        {errors.email && <p className="error">{errors.email}</p>}

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        {errors.password && <p className="error">{errors.password}</p>}

        <button>Create Account</button>
      </form>
    </div>
  );
}

export default Register;
