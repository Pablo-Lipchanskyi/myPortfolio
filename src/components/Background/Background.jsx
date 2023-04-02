import { useState, useEffect } from 'react';

const Background = () => {
  const [hue, setHue] = useState(Math.random() * 360);
  const [saturation, setSaturation] = useState(Math.random() * 50 + 50);
  const [lightness, setLightness] = useState(Math.random() * 40 + 30);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHue(Math.random() * 360);
      setSaturation(Math.random() * 50 + 50);
      setLightness(Math.random() * 40 + 30);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const particleNum = 1000;
  const maxRange = 1000;
  const minRange = maxRange / 2;
  const maxRadius = 25;

  const particles = [];
  for (let i = 0; i < particleNum; i++) {
    const x = Math.floor(Math.random() * maxRange - minRange);
    const y = Math.floor(Math.random() * maxRange - minRange);
    const z = Math.floor(Math.random() * maxRange);
    const r = Math.floor(Math.random() * maxRadius + 1);
    particles.push({ x, y, z, r });
  }

  const backgroundStyle = {
    background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100vw',
    height: '100vh',
  };

  const particleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '1px',
    height: '1px',
    background: '#FFFFFF',
    borderRadius: '50%',
    transformOrigin: 'center',
  };

  const particlesList = particles.map((particle, index) => {
    const style = {
      ...particleStyle,
      transform: `translate3d(${particle.x}px, ${particle.y}px, ${particle.z}px)`,
      width: `${particle.r}px`,
      height: `${particle.r}px`,
    };

    return <div key={index} style={style}></div>;
  });

  return <div className="background" style={backgroundStyle}>{particlesList}</div>;
};

export default Background;