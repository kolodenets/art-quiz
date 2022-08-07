import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ number = 1, result = 0, imgNumber = 1, game }) => {
  const navigate = useNavigate();

  const clickHandler = (numb) => {
    navigate("/game");
    localStorage.setItem(`${game}-card${numb}-color`, "color");
    localStorage.setItem(`${game}-card${numb}-text`, "var(--main-bg-color)");
    localStorage.setItem(`${game}-card${numb}-result`, "1");
    localStorage.setItem('game-range', `${number}`);
  };

  const getCardColor = (item) => {
    return localStorage.getItem(`${game}-card${item}-color`)
      ? localStorage.getItem(`${game}-card${item}-color`)
      : "gray";
  };

  const textColor = localStorage.getItem(`${game}-card${number}-text`)
    ? "var(--main-bg-color)"
    : "#555555";

  const imageUrl = `../images/${getCardColor(
    number
  )}/category-${imgNumber}.png`;
  
  const resVisibility = localStorage.getItem(`${game}-card${number}-result`) ? 1 : 0;

  return (
    <div className={styles.container} onClick={() => clickHandler(number)}>
      <div className={styles.innerContainer}>
        <span className={styles.number} style={{ color: textColor }}>
          {number}
        </span>
        <span className={styles.result} style={{ opacity: resVisibility }}>
          {result}/10
        </span>
      </div>
      <div className={styles.image}>
        <img src={imageUrl} alt="categoryImage" />
      </div>
    </div>
  );
};

export default Card;
