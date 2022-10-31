import { useState, useEffect, useRef } from 'react';
import Dinosaur from './Dinosaur';

function App() {
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0 });
  const [directionTravel, setDirectionTravel] = useState();
  const xPervPosition = useRef();

  xPervPosition.current = randomPosition.x;

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    setInterval(() => {
      let xRandom = generateRandomNumber(0, 75);
      if (xRandom < xPervPosition.current) {
        setDirectionTravel(-1);
      } else {
        setDirectionTravel(1);
      }
      setRandomPosition({
        x: xRandom,
        y: generateRandomNumber(0, 50),
      });
    }, 10000);
  }, []);

  return (
    <div className="page">
      <Dinosaur position={randomPosition} directionTravel={directionTravel} />
    </div>
  );
}

export default App;
