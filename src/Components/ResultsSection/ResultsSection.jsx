import React, { useRef } from "react";
import "./ResultsSection.css";
import ResultCard from "../ResultCard/ResultCard";
import brazil from "../../Assets/brazil.png";
import soldiers from "../../Assets/soldiers.jpg";
import war from "../../Assets/war.jpg";
import order from "../../Assets/order.jpg";
import TiltCard from "../TiltCard/TiltCard";
import AnimatedSection from "../Animate/Animate";

export default function ResultsSection() {
  const imageRef1 = useRef();
  const imageRef2 = useRef();
  const imageRef3 = useRef();
  const imageRef4 = useRef();

  return (
    <section className="results-section">
      <AnimatedSection direction="bottom">
        <h2 className="results-title">Resultados em Campo</h2>
        <p className="results-subtitle">
          Aplicando as estratégias da BRAC, nossos comandantes alcançaram
          vitórias expressivas e fortaleceram sua liderança nas alianças.
        </p>

        <div className="results-grid">
          <TiltCard imageRef={imageRef1}>
            <ResultCard
              image={brazil}
              title="Comunidade Brasileira"
              description="A BRAC é uma aliança brasileira de elite no Lastwar, composta por jogadores estratégicos, ativos e unidos. Com liderança organizada e comunicação direta, a Tropa do Brasil se destaca por disciplina, cooperação e presença constante nos principais eventos do jogo."
            />
          </TiltCard>

          <TiltCard imageRef={imageRef2}>
            <ResultCard
              image={soldiers}
              title="Comando Estratégico em Ação"
              description="Nossa estrutura de liderança é composta por R5 e R4s experientes, responsáveis por coordenar guerras, treinar novos membros e garantir decisões rápidas em tempo real. Cada líder BRAC é um pilar da nossa força coletiva."
            />
          </TiltCard>
          <TiltCard imageRef={imageRef3}>
            <ResultCard
              image={war}
              title="Presença em Guerras e Eventos"
              description="A BRAC está sempre no front. Participamos ativamente das Guerras de Alianças, Dominação Global e Operações Táticas. Com ações coordenadas e estratégias testadas, garantimos vitórias importantes para nossos membros."
            />
          </TiltCard>
          <TiltCard imageRef={imageRef4}>
            <ResultCard
              image={order}
              title="Jogue Junto, Cresça com a BRAC"
              description="Mais que uma aliança, somos uma comunidade. Ajudamos novos jogadores, trocamos dicas e mantemos comunicação diária pelo WhatsApp e Discord. Aqui, todos crescem juntos — com honra, estratégia e espírito de equipe."
            />
          </TiltCard>
        </div>
      </AnimatedSection>
    </section>
  );
}
