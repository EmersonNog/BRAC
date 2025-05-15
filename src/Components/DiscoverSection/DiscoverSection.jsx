import React from "react";
import "./DiscoverSection.css";
import tabletImage from "../../Assets/discovery.png";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";
import AnimatedSection from "../Animate/Animate";

export default function DiscoverSection() {
  return (
    <section className="discover-section" id="discover-section">
      <AnimatedSection direction="bottom">
        <div className="discover-content">
          <h2 className="title">BRAC</h2>
          <p className="subtitle">
            Na BRAC, buscamos capacitar indivíduos com um profundo conhecimento
            de estratégia por meio de tutoriais envolventes e recursos
            informativos. Junte-se à nossa comunidade e aprimore suas
            habilidades de pensamento estratégico hoje mesmo!
          </p>

          <div className="stats-grid">
            <div className="stat">
              <h3>
                <AnimatedCounter end={80} />+ Membros
              </h3>
              <p>
                Nossa aliança recrutou com sucesso mais de 80 soldados à
                comunidade, fornecendo planos de crescimento ideais!
              </p>
            </div>
            <div className="stat">
              <h3>
                <AnimatedCounter end={15} /> Tutoriais
              </h3>
              <p>
                Elaboramos 15 tutoriais que abrangem conceitos básicos até o
                avançado, atendendo tanto iniciantes quanto veteranos.
              </p>
            </div>
            <div className="stat">
              <h3>
                <AnimatedCounter end={2500000000} /> Poder
              </h3>
              <p>
                Possuimos um dos 10 poderes mais altos do servidor, com ampla
                tendência de crescimento!
              </p>
            </div>
            <div className="stat">
              <h3>
                <AnimatedCounter end={1800000} /> Pontos de Presentes
              </h3>
              <p>
                Crescimento constante nos pontos de presentes, que favorece a
                aliança como um todo.
              </p>
            </div>
          </div>
        </div>

        <div className="discover-image">
          <img src={tabletImage} alt="Tablet preview" />
        </div>
      </AnimatedSection>
    </section>
  );
}
