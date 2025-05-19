import React from "react";
import { Link } from "react-router-dom";
import "./SeasonFloatButton.css";

export default function SeasonFloatButton() {
  return (
    <Link to="/season-1" className="season-float-btn">
      📢 Temporada 1
    </Link>
  );
}
