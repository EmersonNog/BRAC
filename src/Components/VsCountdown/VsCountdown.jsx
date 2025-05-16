import React, { useEffect, useState } from "react";
import "./VsCountdown.css";

export default function VsCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [isVsActive, setIsVsActive] = useState(isVsPeriodActive());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
      setIsVsActive(isVsPeriodActive());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function isVsPeriodActive() {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const local = new Date(now.getTime() - offset * 60000 - 3 * 60 * 60 * 1000); // UTC-3

    const day = local.getDay(); // 0 = domingo, 6 = sábado
    const hour = local.getHours();

    // Descanso entre sábado 23:00 e domingo 22:59
    return !((day === 6 && hour >= 23) || (day === 0 && hour < 23));
  }

  function getTimeRemaining() {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const local = new Date(now.getTime() - offset * 60000 - 3 * 60 * 60 * 1000); // UTC-3

    const day = local.getDay();
    const hour = local.getHours();

    let target = new Date(local);

    if ((day === 6 && hour >= 23) || (day === 0 && hour < 23)) {
      // Estamos fora do VS → volta para domingo às 23h
      const daysToSunday = (7 - day) % 7;
      target.setDate(local.getDate() + daysToSunday);
      target.setHours(23, 0, 0, 0);
    } else {
      // VS ativo → conta até sábado 22:59
      const daysUntilSaturday = (6 - day + 7) % 7;
      target.setDate(local.getDate() + daysUntilSaturday);
      target.setHours(22, 59, 59, 999);
    }

    const diff = target - local;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="vs-countdown-box">
      {isVsActive ? (
        <>
          <h3>⏳ VS atual termina em:</h3>
          <div className="countdown">
            <div>
              <span>{String(timeLeft.days).padStart(2, "0")}</span>
              <small>dias</small>
            </div>
            <div>
              <span>{String(timeLeft.hours).padStart(2, "0")}</span>
              <small>h</small>
            </div>
            <div>
              <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
              <small>min</small>
            </div>
            <div>
              <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
              <small>s</small>
            </div>
          </div>
          <p className="vs-note">
            Continue pontuando para conquistar o trem da BRAC!
          </p>
        </>
      ) : (
        <div className="vs-rest-message">
          <h3>🛌 VS encerrado</h3>
          <p>Aproveite o descanso! A próxima batalha começa domingo às 23h.</p>
        </div>
      )}
    </div>
  );
}
