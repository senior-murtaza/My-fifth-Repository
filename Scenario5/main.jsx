import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./Home";
import Songs from "./Songs";
import SongDetails from "./SongDetails";
import Playlist from "./Playlist";
import AddSong from "./AddSong";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/songs/:id" element={<SongDetails />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/add-song" element={<AddSong />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
