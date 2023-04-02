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

  const backgroundStyle = {
    background: `hsl(${hue}, ${saturation}%, ${lightness}%)`
  };

  return <div className="background" style={backgroundStyle}></div>;
};

export default Background;