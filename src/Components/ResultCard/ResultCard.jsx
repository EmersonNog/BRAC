import React, { forwardRef } from "react";
import "../ResultsSection/ResultsSection.css";

const ResultCard = forwardRef(({ image, title, description }, imageRef) => {
  return (
    <div className="result-card">
      <img src={image} alt={title} ref={imageRef} className="result-image" />
      <div className="result-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
});

export default ResultCard;
