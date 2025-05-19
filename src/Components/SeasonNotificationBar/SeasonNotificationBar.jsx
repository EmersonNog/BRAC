import React from "react";
import { Link } from "react-router-dom";
import "./SeasonNotificationBar.css";

export default function SeasonNotificationBar() {
  return (
    <div className="season-bar">
      🧬 {""} A mutação começou.<Link to="/season-1">Saiba tudo</Link>
    </div>
  );
}
