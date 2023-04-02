import React from 'react';

const Particle = ({ x, y, radius, hue, lightness }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = `hsl(${hue}, 50%, ${lightness}%)`;
    context.fill();
  }, [x, y, radius, hue, lightness]);

  return <canvas ref={canvasRef} />;
};

export default Particle;