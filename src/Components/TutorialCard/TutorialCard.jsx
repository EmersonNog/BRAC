import React from "react";
import "../TutorialsCarousel/VS/TutorialsVsCarousel.css";

export default function TutorialCard({ type, source, title, description }) {
  return (
    <div className="tutorial-card keen-slider__slide">
      {type === "video" ? (
        <div className="video-thumbnail tutorial-media">
          <video src={source} muted playsInline />
          <div className="play-overlay">▶</div>
        </div>
      ) : (
        <img src={source} alt={title} className="tutorial-media" />
      )}

      <div className="tutorial-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
