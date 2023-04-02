import React from "react";

const Particle = ({ x, y, size, color }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        opacity: 0.7,
        pointerEvents: "none",
      }}
    />
  );
};

export default Particle;