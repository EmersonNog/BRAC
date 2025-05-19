import React from "react";
import { Link } from "react-router-dom";
import "./SeasonNotificationBar.css";

export default function SeasonNotificationBar() {
  return (
    <div className="season-bar">
      🚨 Temporada 1 começou! Novas recompensas e desafios estão no ar.{" "}
      <Link to="/season-1">Confira agora</Link>
    </div>
  );
}
