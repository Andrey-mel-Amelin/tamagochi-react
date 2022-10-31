function Dinosaur({ position, directionTravel }) {
  return (
    <div className="respawn">
      <div
        className="dinosaur"
        style={{
          top: `${position.y}%`,
          left: `${position.x}%`,
          transform: `scale(${directionTravel}, 1)`,
        }}
      />
    </div>
  );
}

export default Dinosaur;
