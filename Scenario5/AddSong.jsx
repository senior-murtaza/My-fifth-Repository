import { useState } from "react";

function AddSong() {
  const [form, setForm] = useState({
    title: "",
    artist: "",
    genre: "",
    duration: "",
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

    if (form.title.trim().length < 2) {
      newErrors.push("Song title must be at least 2 characters.");
    }

    if (form.artist.trim().length < 2) {
      newErrors.push("Artist name must be at least 2 characters.");
    }

    if (form.genre === "") {
      newErrors.push("Please select a genre.");
    }

    if (!form.duration.includes(":")) {
      newErrors.push("Duration must use this format: 3:45");
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      setSuccess(`"${form.title}" was added successfully!`);

      setForm({
        title: "",
        artist: "",
        genre: "",
        duration: "",
      });
    } else {
      setSuccess("");
    }
  }

  return (
    <main className="page">
      <div className="add-song-card">
        <div className="form-icon">♫</div>

        <h1>Add New Song</h1>

        <p>Add a song to your music collection.</p>

        <form onSubmit={handleSubmit}>
          <label>Song Title</label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter song title"
          />

          <label>Artist</label>

          <input
            type="text"
            name="artist"
            value={form.artist}
            onChange={handleChange}
            placeholder="Enter artist name"
          />

          <label>Genre</label>

          <select name="genre" value={form.genre} onChange={handleChange}>
            <option value="">Select genre</option>
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Chill">Chill</option>
            <option value="Electronic">Electronic</option>
          </select>

          <label>Duration</label>

          <input
            type="text"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            placeholder="Example: 3:45"
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
            Add Song
          </button>
        </form>
      </div>
    </main>
  );
}

export default AddSong;
