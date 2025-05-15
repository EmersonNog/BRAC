import React from "react";
import "./HeroSection.css";
import mapimage from "../../Assets/militarymap.png";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-image">
        <img src={mapimage} alt="Military strategy map" />
      </div>
      <div className="hero-text">
        <h2>
          Desvende os segredos da{" "}
          <span className="highlight">estratégia militar</span>
          <span className="dot">.</span>
        </h2>
        <p>
          Seja bem-vindo à <strong>BRAC – Tropa do Brasil</strong>, a maior e
          mais respeitada aliança brasileira do servidor{" "}
          <span className="dot">#1289</span>. Nossa força não está apenas no
          poder de combate, mas na união de nossos membros. Aqui, prezamos por{" "}
          <strong>companheirismo, lealdade e esforço coletivo</strong> — valores
          que nos tornaram referência no servidor e um verdadeiro lar para
          jogadores comprometidos com a vitória e com a honra da tropa.
        </p>
      </div>
    </section>
  );
}
