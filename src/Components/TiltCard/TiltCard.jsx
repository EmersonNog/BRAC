/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./TiltCard.css";

export default function TiltCard({ children, imageRef }) {
  const ref = useRef(null);
  const [style, api] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 300, friction: 30 },
  }));

  const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 10,
    (x - rect.left - rect.width / 2) / 10,
    1.04,
  ];

  return (
    <animated.div
      ref={ref}
      className="tilt-wrapper"
      style={{
        transform: style.xys.to(
          (x, y, s) =>
            `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
        willChange: "transform",
      }}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        const [x, y] = calc(e.clientX, e.clientY, rect);
        api.start({ xys: [x, y, 1.04] });

        if (imageRef?.current) {
          imageRef.current.style.transform = `translate(${y * 8}px, ${
            x * 8
          }px) scale(1.1)`;
        }
      }}
      onMouseLeave={() => {
        api.start({ xys: [0, 0, 1] });
        if (imageRef?.current) {
          imageRef.current.style.transform = "translate(0px, 0px) scale(1)";
        }
      }}
    >
      {children}
    </animated.div>
  );
}
