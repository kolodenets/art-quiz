import React from 'react';
import styles from'./Card.module.css'

const Card = ({number=1, result=0, visibility=0, color='gray', imgNumber=1}) => {
  const imageUrl = `../images/${color}/category-${imgNumber}.png`
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <span className={styles.number}>{number}</span>
        <span className={styles.result } style={{opacity: visibility} }>{result}/10</span>
      </div>
      <div className={styles.image}>
        <img src={imageUrl} alt="category-image" />
      </div>
    </div>
  );
};

export default Card;