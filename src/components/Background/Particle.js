import React from 'react';

const Particle = ({ x, y, size, hue }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `hsla(${hue}, 70%, 50%, 0.8)`,
        filter: 'blur(5px)',
        pointerEvents: 'none',
      }}
    />
  );
};

export default Particle;