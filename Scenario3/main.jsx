import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./Home";
import Destinations from "./Destinations";
import DestinationDetails from "./DestinationDetails";
import Plan from "./Plan";
import MyTrip from "./MyTrip";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/my-trip" element={<MyTrip />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
