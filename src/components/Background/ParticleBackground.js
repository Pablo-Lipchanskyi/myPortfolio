import React, { useEffect, useState } from "react";
import Particle from "./Particle";

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleNum = 1000;
    const maxRange = 1000;
    const minRange = maxRange / 2;
    const maxRadius = 25;

    const particles = [...Array(particleNum)].map((_, index) => {
      const x = Math.random() * maxRange - minRange;
      const y = Math.random() * maxRange - minRange;
      const size = Math.random() * maxRadius + 1;
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

      return { x, y, size, color, key: index };
    });

    setParticles(particles);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to top, #1CB5E0, #000046)",
        overflow: "hidden",
      }}
    >
      {particles.map(({ x, y, size, color, key }) => (
        <Particle key={key} x={x} y={y} size={size} color={color} />
      ))}
    </div>
  );
};

export default ParticleBackground;