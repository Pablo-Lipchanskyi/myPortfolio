import React from 'react';
import Particle from './Particle';

const ParticleBackground = () => {
  const canvasRef = React.useRef(null);
  const [particles, setParticles] = React.useState([]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext('2d');

    const particleNum = 1000;
    const maxRange = 1000;
    const minRange = maxRange / 2;
    const maxRadius = 25;

    const createParticle = () => {
      const x = Math.random() * maxRange - minRange;
      const y = Math.random() * maxRange - minRange;
      const radius = Math.random() * maxRadius + 1;
      const hue = Math.random() * 360;
      const lightness = Math.random() * 50 + 50;

      return { x, y, radius, hue, lightness };
    };

    const updateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let { x, y } = particle;

          x += Math.sin(y / 10) * 2;
          y += Math.sin(x / 10) * 2;

          return { ...particle, x, y };
        })
      );

      requestAnimationFrame(updateParticles);
    };

    const initialParticles = Array.from({ length: particleNum }, createParticle);

    setParticles(initialParticles);
    updateParticles();

    return () => {
      cancelAnimationFrame(updateParticles);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      {particles.map((particle, index) => (
        <Particle key={index} {...particle} />
      ))}
    </canvas>
  );
};

export default ParticleBackground;