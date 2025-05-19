import React, { useState } from "react";
import "./SeasonOneTutorial.css";

export default function SeasonOneTutorial() {
  const [videoEnded, setVideoEnded] = useState(false);
  return (
    <div className="dark-page">
      {!videoEnded && (
        <div className="season-video-intro">
          <video
            className="season-video"
            autoPlay
            muted={false}
            playsInline
            onEnded={() => setVideoEnded(true)}
          >
            <source src="./src/Assets/video/crimson.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      )}
      {videoEnded && (
        <section className="season1-tutorial">
          <h1 className="main-title">
            🦠Temporada 1: The Crimson Plague – Tutorial Completo
          </h1>
          <div className="season-lore-scroll">
            <h2 className="scroll-title">📜 Crônicas da Temporada 1</h2>
            <p>
              Em um passado recente, durante a Corrida Biotecnológica Secreta,
              uma divisão militar desenvolveu um patógeno experimental com o
              objetivo de criar soldados imunes à dor, ao medo e à obediência. O
              projeto, batizado de <strong>Crimson Protocol</strong>, saiu do
              controle quando sua cobaia mais promissora — uma estrategista
              brilhante — sofreu mutação completa.
            </p>
            <p>
              Sob o codinome <strong>Lady in Red</strong>, ela assumiu o comando
              de um exército de infectados com precisão tática. Seus alvos:
              centros urbanos, bases de comando e fortalezas tecnológicas. A
              infecção se espalhou como fogo em palha seca, transformando nações
              em zonas vermelhas. Surgiu então a{" "}
              <span className="highlight">Praga Carmesim</span> — um vírus
              inteligente, volátil, implacável.
            </p>
            <p>
              Em meio ao colapso das alianças globais, uma força emergiu no
              silêncio: a <strong>BRAC</strong>. Formada por ex-comandantes,
              especialistas em bioengenharia, engenheiros táticos e líderes
              estratégicos, a BRAC ergueu-se como último bastião da humanidade.
              Sua missão: reagrupar sobreviventes, purificar zonas críticas,
              recuperar conhecimento genético e reconquistar as cidades sob
              domínio vermelho.
            </p>
            <p>
              Nesta Temporada 1, o conflito se intensifica. A{" "}
              <strong>Lady in Red</strong> fortalece suas legiões com variantes
              evoluídas. As cidades se tornaram campos de guerra
              genético-militar. Fortalezas estratégicas são disputadas
              diariamente, enquanto a infecção se infiltra até nos sistemas de
              defesa.
            </p>
            <p>
              É nesse cenário que a BRAC assume o protagonismo. Sua inteligência
              coletiva, disciplina em rede e domínio tático transformaram um
              grupo de sobreviventes em uma força ofensiva de elite. A vitória
              dependerá da cooperação, da estratégia e da coragem de seus
              comandantes. A guerra pelo futuro começou — e ela carrega o nome
              de <strong>The Crimson Plague</strong>.
            </p>
          </div>

          <p className="intro">
            Domine a primeira grande temporada de <strong>Last War</strong> com
            estratégias avançadas, dicas para iniciantes e tudo o que você
            precisa saber sobre eventos, recompensas e evolução. Preparado,
            comandante?
          </p>

          <div className="section">
            <h2>📖 Visão Geral da Temporada</h2>
            <ul>
              <li>Duração: 8 semanas + 4 semanas de celebração.</li>
              <li>
                Nova ameaça: <strong>Praga Carmesim</strong>, espalhada por Lady
                in Red.
              </li>
              <li>
                Novas mecânicas: resistência ao vírus, fragmentos genéticos,
                guerra por cidades, profissões sazonais.
              </li>
            </ul>
          </div>

          <div className="section">
            <h2>🎯 Estratégias Fundamentais</h2>
            <ul>
              <li>
                <strong>Suba sua resistência ao vírus</strong>: Foque no
                Instituto Viral e missões semanais.
              </li>
              <li>
                <strong>Construa os novos edifícios</strong>: Instituto Viral,
                Fazenda de Proteína, Base Militar.
              </li>
              <li>
                <strong>Guarde melhorias para eventos</strong>: Faça upgrades
                durante Duel VS ou Arms Race.
              </li>
              <li>
                <strong>Troque fragmentos com aliados</strong>: Complete
                recombinações e maximize ganhos.
              </li>
              <li>
                <strong>Use toda a stamina</strong>: Eventos como Purge Action
                não têm limite de baús.
              </li>
            </ul>
          </div>

          <div className="section">
            <h2>🧬 Recursos Sazonais</h2>
            <div className="table-container">
              <table className="resource-table">
                <thead>
                  <tr>
                    <th>Recurso</th>
                    <th>Como obter</th>
                    <th>Utilização</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>🧪 Proteína Imune</td>
                    <td>Fazendas, eventos, PvE</td>
                    <td>Evolução de prédios sazonais</td>
                  </tr>
                  <tr>
                    <td>💠 Cristal Mutante</td>
                    <td>Missões, rallies, recombinação</td>
                    <td>Upgrade de construções</td>
                  </tr>
                  <tr>
                    <td>🧬 Fragmentos Genéticos</td>
                    <td>Radar, infectados, trocas</td>
                    <td>Recombinação e prêmios</td>
                  </tr>
                  <tr>
                    <td>🛡️ Resistência</td>
                    <td>Instituto Viral, missões</td>
                    <td>Reduz debuffs em combate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="section">
            <h2>👥 Estratégia de Aliança</h2>
            <ul>
              <li>Inicie rallies com tropas mínimas e chame aliados fortes.</li>
              <li>
                Distribua profissões: engenheiros para suporte, líderes para
                PvP.
              </li>
              <li>Troque fragmentos organizadamente (use Discord/WhatsApp).</li>
              <li>
                Coordene guerras de cidades (1 hora por cidade, 2 por dia).
              </li>
            </ul>
          </div>

          <div className="section">
            <h2>🏙️ Guerra por Cidades e Capitólio</h2>
            <p>
              Capture uma <strong>Fortaleza Militar</strong> para declarar
              guerra em cidades vizinhas.
            </p>
          </div>

          <div className="section">
            <h2>👶 Dicas para Iniciantes</h2>
            <ul>
              <li>Entre em uma aliança forte (como a BRAC 🫡).</li>
              <li>Construa Instituto e Fazenda logo no início.</li>
              <li>
                Escolha <strong>Engenheiro</strong> se for novato. Troque para
                Líder depois.
              </li>
              <li>Peça ajuda para rallies e coordene ataques com o grupo.</li>
              <li>Aproveite o bilhete “Retorno de Herói” se disponível.</li>
            </ul>
          </div>

          <div className="section">
            <h2>🏆 Recompensas por Tier de Aliança</h2>
            <div className="table-container">
              <table className="resource-table">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Requisitos</th>
                    <th>Recompensas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>🥇 Ouro</td>
                    <td>4 cidades nível 6</td>
                    <td>Itens UR, cristais, proteínas, medalhas</td>
                  </tr>
                  <tr>
                    <td>🟪 Roxo</td>
                    <td>3 cidades nível 6 + 8M influência</td>
                    <td>Prêmios valiosos de temporada</td>
                  </tr>
                  <tr>
                    <td>🔵 Azul</td>
                    <td>+4M influência</td>
                    <td>Pacote intermediário</td>
                  </tr>
                  <tr>
                    <td>🟢 Verde</td>
                    <td>+1M influência</td>
                    <td>Recompensas básicas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <footer className="footer">
            <p>
              🌐 Tutorial BRAC • Temporada 1 • Desenvolvido com base nos guias
              oficiais e da comunidade.
            </p>
          </footer>
        </section>
      )}
    </div>
  );
}
