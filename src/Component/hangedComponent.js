import React, { useEffect, useState } from 'react';
import pendu1 from '../asset/pendu-1bis.png';
import pendu2 from '../asset/pendu-2.png';
import pendu3 from '../asset/pendu-3.png'; 
import pendu4 from '../asset/pendu-4.png'; 
import pendu5 from '../asset/pendu-5.png'; 

 
function HangedComponent({ failed }) {
  const [opacity, setOpacity] = useState({
    pendu1: 1,
    pendu2: 0,
    pendu3: 0,
    pendu4: 0,
    pendu5: 0
  });

  

  // pour augmenter l'opacité de l'image qui correspond
  const increaseOpacity = (image) => {
    setOpacity(prevOpacity => ({
      ...prevOpacity,
      [image]: prevOpacity[image] === 1 ? 0 : 1 
    }));
  };

  useEffect(() => {
    if (failed) {
      increaseOpacity(`pendu${failed}`);
    }
  }, [failed]);

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', margin: 'auto', height: '15vh', width: '10vw' }}>
      <img
        src={pendu1}
        alt="Pendu"
        className='pendu1'
        style={{ transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out', opacity: opacity.pendu1 }}
      />
      <img
        src={pendu2}
        alt="Pendu"
        className='pendu2'
        style={{ transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out', opacity: opacity.pendu2 }}
      />
      <img
        src={pendu3}
        alt="Pendu"
        className='pendu3'
        style={{ transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out', opacity: opacity.pendu3 }}
      />
      <img
        src={pendu4}
        alt="Pendu"
        className='pendu4'
        style={{ transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out', opacity: opacity.pendu4 }}
      />
      <img
        src={pendu5}
        alt="Pendu"
        className='pendu5'
        style={{ transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out', opacity: opacity.pendu5 }}
      />

    </div>
  );
}


export default HangedComponent;
