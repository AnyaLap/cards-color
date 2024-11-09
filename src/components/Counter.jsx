import React, { useState, useEffect } from "react";
import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {

    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <p className="counter-text">Вы нажали {count} раз</p>
      <button className="counter-btn" onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}