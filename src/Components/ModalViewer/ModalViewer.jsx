import React, { useEffect } from "react";
import "./ModalViewer.css";

export default function ModalViewer({ open, onClose, content }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-uiux-overlay" onClick={onClose}>
      <div className="modal-uiux-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-uiux-close" onClick={onClose}>
          <span>&times;</span>
        </button>

        <div className="modal-uiux-media">
          {content.type === "video" ? (
            <video src={content.source} controls autoPlay />
          ) : (
            <img src={content.source} alt={content.title} />
          )}
        </div>

        <div className="modal-uiux-text">
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </div>
      </div>
    </div>
  );
}
