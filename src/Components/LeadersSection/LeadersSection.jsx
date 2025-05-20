import React from "react";
import LeaderCard from "../LeaderCard/LeaderCard";
import "./LeadersSection.css";
import AnimatedSection from "../Animate/Animate";

export default function LeadersSection() {
  return (
    <AnimatedSection direction="bottom">
      <section className="leaders-section" id="leaders-section">
        <h2 className="leaders-title">Conheça nossa liderança</h2>

        <div className="leaders-tier top-tier">
          <LeaderCard name="Nogueira" title="R5 - Líder" />
        </div>

        <div className="leaders-tier mid-tier">
          <LeaderCard name="Thiago" title="R4 - Senhor da Guerra" />
          <LeaderCard name="Grelo" title="R4 - Recrutador" />
          <LeaderCard name="Sisi" title="R4 - Musa" />
          <LeaderCard name="Sardala" title="R4 - Mordomo" />
        </div>

        <div className="leaders-tier base-tier">
          <LeaderCard name="Junior jd" title="R4" />
          <LeaderCard name="Viktor" title="R4" />
          <LeaderCard name="Baunilha" title="R4" />
          <LeaderCard name="Carolina" title="R4" />
          <LeaderCard name="Facinho" title="R4" />
          <LeaderCard name="Sr. Sisi" title="R4" />
        </div>

        <p className="leaders-quote">
          Nossa liderança move a BRAC com coragem, estratégia e união. Cada
          líder aqui representa a força que nos mantém sempre à frente.
        </p>
      </section>
    </AnimatedSection>
  );
}
