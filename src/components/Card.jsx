import {useState, useRef} from "react";
import "./Card.css";

export const Card = (props) => {

  const [selected, setSelected] = useState(false);
  const [buttonColor, setButtonColor] = useState("grey");
  const myCardRef = useRef(null);

  const handleClick = () => {

      setSelected(!selected);

      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        if (card !== myCardRef.current) {
          card.classList.remove("large");
        }
      });
      setButtonColor(selected ? "grey" : "orange");
    };

  return (
    <>
      <div ref={myCardRef}
           className={`card ${selected ? "large" : ""}`} 
           onClick={handleClick}>
        <div className="card-body" style={{backgroundColor:props.color}}>
            <div className="card-title">
                <h3>Безлимитный {props.price}</h3>
            </div>
            <div className="card-price">
                <p><sup>руб</sup><span>{props.price}</span><sub>/мес</sub></p>
            </div>
        </div>
        <div className="card-speed card_pad">
            <p>До {props.speed} Мбит/сек</p>
        </div>
        <div className="card-text card_pad">
            <p>Объем включенного трафика не ограничен</p>
        </div>
        <button className="card-btn" style={{ backgroundColor: buttonColor }} disabled={!selected}>Оформить</button>
      </div>
    </>
  );
};