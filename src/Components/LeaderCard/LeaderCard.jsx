import React from "react";
import "../LeadersSection/LeadersSection.css";

export default function LeaderCard({ name, title }) {
  return (
    <div className="leader-card">
      <div className="leader-avatar">{name.charAt(0)}</div>
      <div className="leader-info">
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
    </div>
  );
}
