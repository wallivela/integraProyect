import React, { useEffect, useState } from 'react';

function Homes() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  useEffect(() => {

    const intervalId = setInterval(() => {

      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setBackgroundColor(randomColor);
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ position: 'relative', textAlign: 'center', height: '100vh', backgroundColor }}>
      <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2vw' }}>
        HOLA BIENVENIDO
      </p>
      <img
        src="/assets/react.svg" // Ajusta la ruta según la ubicación de tu archivo SVG
        alt="React Logo"
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '20%' }}
      />
    </div>
  );
}

export default Homes;
