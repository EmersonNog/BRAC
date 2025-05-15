import React from "react";
import "../LeadersSection/LeadersSection.css";

export default function LeaderCard({ name, title }) {
  const isR5 = title.includes("R5");
  const hasSubtitle = title.includes(" - ");
  const icon = isR5 ? "👑" : hasSubtitle ? "👑" : "⭐";

  const avatarClass = isR5
    ? "leader-avatar r5"
    : hasSubtitle
    ? "leader-avatar r4-special"
    : "leader-avatar r4";

  return (
    <div className="leader-card">
      <div className={avatarClass}>{icon}</div>
      <div className="leader-info">
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
    </div>
  );
}
