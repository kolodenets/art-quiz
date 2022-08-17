import React from 'react';
import styles from './ScoreCard.module.css'

const ScoreCard = ({imgNumber}) => {
  const result = localStorage.getItem(`score-card-${imgNumber}`)
  const imageUrl = `../images/sizedImages/${imgNumber}.jpg`;

  return (
    <div className={styles.container}>
      <div className={!result ? styles.result : result === 'yes' ? [styles.result, styles.correct].join(' ') : [styles.result, styles.wrong].join(' ')}></div>
      <div className={styles.imageContainer}>
        <img className={!result ? styles.grayscale : ''} src={imageUrl} alt="categoryImage" />
      </div>
    </div>
  );
};

export default ScoreCard;