import React from "react";
import "./JoinCommunitySection.css";
import { FaUsers } from "react-icons/fa";

export default function JoinCommunitySection() {
  return (
    <section className="community-section">
      <h2>Junte-se à Comunidade de Brasileiros (BRAC)</h2>
      <p>
        Conecte-se com outros jogadores de Last War, compartilhe conhecimento e
        aprenda com membros experientes. Nossa comunidade é um centro vibrante
        de colaborações, discussões e aprendizado contínuo.
      </p>

      <ul className="benefits-list">
        <li>
          <FaUsers /> Conteúdo Exclusivo: Acesse tutoriais e apresentações só
          para membros.
        </li>
        <li>
          <FaUsers /> Perguntas e Respostas com Veteranos: Tire dúvidas com
          líderes experientes.
        </li>
        <li>
          <FaUsers /> Projetos Colaborativos: Participe de eventos e sorteios em
          grupo.
        </li>
        <li>
          <FaUsers /> Networking: Conecte-se com jogadores dedicados como você.
        </li>
      </ul>

      <div className="connect-section">
        <h3>Pronto para se conectar?</h3>
        <p>
          Faça parte da BRAC e desbloqueie um mundo de estratégias avançadas.
        </p>
        <div className="buttons">
          <a
            href="https://discord.gg/y3sk3naW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="join">Junte-se Agora</button>
          </a>
        </div>
      </div>
    </section>
  );
}
