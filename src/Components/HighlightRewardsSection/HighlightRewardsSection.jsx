import React from "react";
import "./HighlightRewardsSection.css";
import { FaGift, FaTrophy, FaTrainSubway, FaWhatsapp } from "react-icons/fa6";
import VsCountdown from "../VsCountdown/VsCountdown";
import AnimatedSection from "../Animate/Animate";

export default function HighlightRewardsSection() {
  return (
    <section className="rewards-section">
      <AnimatedSection direction="bottom">
        <div className="rewards-content">
          <h2>Reconhecemos seu esforço!</h2>
          <p className="intro">
            Aqui na BRAC, valorizamos os jogadores que fazem a diferença durante
            o VS. Quanto mais você participa, mais recompensas pode conquistar!
          </p>

          <ul className="reward-list">
            <li>
              <FaTrophy className="icon" />
              <span>
                <strong>Conduza o Trem da Aliança:</strong> Os maiores
                pontuadores do VS ganham o direito de conduzir o trem e ficar
                com todas as recompensas!
              </span>
            </li>
            <li>
              <FaGift className="icon" />
              <span>
                <strong>Sorteios Mensais:</strong> Participe do grupo oficial da
                BRAC no WhatsApp e concorra a prêmios todos os meses.
              </span>
            </li>
            <li>
              <FaWhatsapp className="icon" />
              <span>
                <strong>Grupo Ativo:</strong> Troque estratégias, receba avisos
                e fique por dentro das premiações.
              </span>
            </li>
          </ul>
          <VsCountdown />
        </div>
      </AnimatedSection>
    </section>
  );
}
