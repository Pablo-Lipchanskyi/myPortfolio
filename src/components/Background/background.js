import React, { useState, useEffect, useRef } from 'react';
import './Background.css';

const Background = () => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const maxParticles = 100;
    const colors = ['#e6e6e6', '#f2f2f2', '#d9d9d9'];
    const gravity = 0.1;
    const friction = 0.95;

    const createParticle = () => {
      const x = canvas.width / 2;
      const y = canvas.height / 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.floor(Math.random() * 10 + 5);
      const directionX = (Math.random() - 0.5) * 2;
      const directionY = (Math.random() - 0.5) * 2 - 1;
      const velocity = Math.random() * 5 + 1;
      const life = Math.floor(Math.random() * 100 + 50);

      return {
        x,
        y,
        color,
        size,
        directionX,
        directionY,
        velocity,
        life,
      };
    };

    const updateParticles = () => {
      setParticles(prevParticles =>
        prevParticles
          .map(particle => {
            if (particle.life <= 0) {
              return createParticle();
            }

            particle.velocity += gravity;
            particle.x += particle.velocity * particle.directionX;
            particle.y += particle.velocity * particle.directionY;
            particle.life--;
            particle.velocity *= friction;

            return particle;
          })
          .filter(particle => particle.y < canvas.height)
      );
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2, false);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId = window.requestAnimationFrame(drawParticles);
    };

    setParticles(Array.from({ length: maxParticles }, createParticle));
    drawParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas className="background" ref={canvasRef} />;
};

export default Background;