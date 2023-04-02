import React from 'react';
import Particle from './Particle';

const Particles = ({ particleNum, maxRange, minRange, maxRadius }) => {
  const particles = [];

  for (let i = 0; i < particleNum; i++) {
    const x = Math.random() * maxRange - minRange;
    const y = Math.random() * maxRange - minRange;
    const size = Math.random() * maxRadius;
    const hue = Math.random() * 360;
    particles.push(
      <Particle key={i} x={x} y={y} size={size} hue={hue} />
    );
  }

  return <div>{particles}</div>;
};

export default Particles;