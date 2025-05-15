import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const step = Math.ceil(end / (duration / 40)); // incrementa mais
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(interval);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}
