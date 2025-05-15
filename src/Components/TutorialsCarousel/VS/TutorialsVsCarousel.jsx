import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TutorialCard from "../../TutorialCard/TutorialCard";
import ModalViewer from "../../ModalViewer/ModalViewer";
import "./TutorialsVsCarousel.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import vs_domingo from "../../../Assets/tutorial/vs-domingo.jpg";
import vs_segunda from "../../../Assets/tutorial/vs-segunda.jpg";
import vs_terca from "../../../Assets/tutorial/vs-terca.jpg";
import vs_quarta from "../../../Assets/tutorial/vs-quarta.jpg";
import vs_quinta from "../../../Assets/tutorial/vs-quinta.jpg";
import vs_sexta from "../../../Assets/tutorial/vs-sexta.jpg";

export default function TutorialsCarousel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const openModal = (tutorial) => {
    setSelectedContent(tutorial);
    setModalOpen(true);
  };

  const tutorials = [
    {
      type: "image",
      source: vs_domingo,
      title: "VS - Domingo",
      description:
        "Coloque tropas para coletar antes do reset (23h). Use vigor, XP de herói, baús de chip e drone. Ideal para farm e preparação.",
    },
    {
      type: "image",
      source: vs_segunda,
      title: "VS - Segunda",
      description:
        "Foque em construção e recrutamento. Deixe para abrir o presente nesse dia. Faça tarefas do esquadrão e use aceleração de construção.",
    },
    {
      type: "image",
      source: vs_terca,
      title: "VS - Terça",
      description:
        "Priorize tecnologia e radar. Gaste medalhas de valor e acelerações. Guarde tarefas para esse dia.",
    },
    {
      type: "image",
      source: vs_quarta,
      title: "VS - Quarta",
      description:
        "Use XP, recrute heróis e gaste fragmentos. Boa oportunidade para evoluir habilidades e completar radar.",
    },
    {
      type: "image",
      source: vs_quinta,
      title: "VS - Quinta",
      description:
        "Dia chave para treinar unidades e pesquisar. Use aceleração de tecnologia, construção e treinamento.",
    },
    {
      type: "image",
      source: vs_sexta,
      title: "VS - Sexta",
      description:
        "Dia de combate: matar inimigos, curar tropas e fazer tarefas do esquadrão. Utilize escudos e prepare-se com antecedência.",
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
    <section className="tutorials-section" id="tutorials-section">
      <div className="tutorials-header">
        <h2>
          Explore nossos <em>tutoriais e apresentações</em> em destaque
        </h2>
        <p>Veja vídeos e apresentações para dominar e jogo.</p>
        <h1>VS - Duelo de Alianças</h1>
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
