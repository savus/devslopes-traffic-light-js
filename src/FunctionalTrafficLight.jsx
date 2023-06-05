import { useState } from "react";

const colors = ["green", "yellow", "red"];

export const FunctionalTrafficLight = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const setColor = (index) => index === colorIndex ? colors[colorIndex] : "black";

  const incrementIndex = () => {
    const isLast = colorIndex === colors.length - 1;
    if (isLast) {
      setColorIndex(colorIndex - colorIndex);
    } else {
      setColorIndex(colorIndex + 1);
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${setColor(2)}`}></div>
        <div className={`circle ${setColor(1)}`}></div>
        <div className={`circle ${setColor(0)}`}></div>
      </div>
      <button className="next-state-button" onClick={incrementIndex}>
        Next State
      </button>
    </div>
  );
};
