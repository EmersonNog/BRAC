import React from "react";
import Lottie from "lottie-react";
import animationData from "../../Assets/flag.json";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <Lottie animationData={animationData} loop={true} className="lottie" />
      <p>CARREGANDO A BASE DA BRAC...</p>
    </div>
  );
}
