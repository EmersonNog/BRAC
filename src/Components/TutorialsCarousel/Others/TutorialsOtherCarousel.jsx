import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TutorialCard from "../../TutorialCard/TutorialCard";
import ModalViewer from "../../ModalViewer/ModalViewer";
import "./TutorialsOtherCarousel.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import cargos from "../../../Assets/tutorial/cargos.png";
import escudo from "../../../Assets/tutorial/escudo.mp4";
import muro from "../../../Assets/tutorial/muro.mp4";
import teleporte from "../../../Assets/tutorial/teleporte.mp4";
import caminhao from "../../../Assets/tutorial/caminhao.jpg";
import evolucao from "../../../Assets/tutorial/evolucao.jpg";
import exercicio from "../../../Assets/tutorial/exercicio.png";
import treinamento from "../../../Assets/tutorial/treinamento.jpg";

export default function TutorialsOtherCarousel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const openModal = (tutorial) => {
    setSelectedContent(tutorial);
    setModalOpen(true);
  };

  const tutorials = [
    {
      type: "image",
      source: cargos,
      title: "Oque são os R's?",
      description:
        "Descubra o significado dos níveis R5, R4 e R3, R2 e R1 dentro da aliança. Entenda como funciona a hierarquia da BRAC, os deveres de cada função e como se destacar para subir de cargo.",
    },
    {
      type: "video",
      source: muro,
      title: "Como colocar tropas no muro?",
      description:
        "Aprenda o passo a passo para posicionar suas tropas defensivas no muro da base. Saiba quando colocar e retirar as tropas para evitar ataques e proteger seus recursos com eficiência.",
    },
    {
      type: "video",
      source: teleporte,
      title: "Como usar o teleporte do VS durante o dia de guerra?",
      description:
        "Veja como se mover no mapa global durante o VS utilizando o teleporte gratuito. Entenda quando usar, para onde ir e como colaborar com a aliança em momentos críticos de batalha.",
    },
    {
      type: "video",
      source: escudo,
      title: "Como comprar escudo na loja da aliança?",
      description:
        "Descubra como adquirir escudos de proteção diretamente pela loja da aliança, sem gastar diamantes. Ideal para quem quer manter a base segura mesmo com poucos recursos.",
    },
    {
      type: "image",
      source: caminhao,
      title: "Como saquear caminhões de outro servidor?",
      description:
        "Saiba como identificar, atacar e saquear caminhões de transporte em servidores rivais durante a semana.",
    },
    {
      type: "image",
      source: evolucao,
      title: "Guia de evolução de bases",
      description:
        "Siga um roteiro estratégico para evoluir sua base com eficiência. Veja quais construções priorizar, como gerenciar recursos e acelerar seu crescimento sem depender de compras.",
    },
    {
      type: "image",
      source: treinamento,
      title: "Guia de treinamento em cascata",
      description:
        "Aprenda a evoluir tropas com eficiência usando quartéis de níveis diferentes. Economize tempo e recursos treinando em sequência.",
    },
    {
      type: "image",
      source: exercicio,
      title: "Entenda o exercicio da aliança",
      description:
        "Saiba como doar ferramentas, abrir raids e ganhar recompensas no evento diário da aliança. Participe corretamente e evite punições.",
    },
  ];

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1.2,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 32 },
      },
    },
  });

  return (
    <section className="tutorials-section">
      <div className="tutorials-header">
        <h1>Tutoriais Diversos</h1>
      </div>

      <div className="carousel-container">
        <button
          className="nav-button left"
          onClick={() => slider.current?.prev()}
        >
          <FaChevronLeft />
        </button>

        <div ref={sliderRef} className="keen-slider tutorials-carousel">
          {tutorials.map((tut, index) => (
            <div onClick={() => openModal(tut)} key={index}>
              <TutorialCard {...tut} />
            </div>
          ))}
        </div>

        <button
          className="nav-button right"
          onClick={() => slider.current?.next()}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="nav-buttons-mobile">
        <button onClick={() => slider.current?.prev()}>
          <FaChevronLeft />
        </button>
        <button onClick={() => slider.current?.next()}>
          <FaChevronRight />
        </button>
      </div>

      <ModalViewer
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        content={selectedContent}
      />
    </section>
  );
}
