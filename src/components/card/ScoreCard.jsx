import React from 'react';
import styles from './ScoreCard.module.css';
import gameInfo from './../../images'
import { useRef } from 'react';
import { useState } from 'react';

const ScoreCard = ({imgNumber}) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const result = localStorage.getItem(`score-card-${imgNumber}`)
  const imageUrl = `../images/sizedImages/${imgNumber}.jpg`;

  const handleClick = () => {
    if (!result) return null;

    setIsOpen(!isOpen)
    
    if(isOpen) {
      ref.current.classList = `${styles.info} ${styles.closed}`
    }
    else {ref.current.classList = `${styles.info} ${styles.opened}`}

  }

  return (
    <div onClick={handleClick} className={styles.container}>
      <div className={!result ? styles.result : result === 'yes' ? [styles.result, styles.correct].join(' ') : [styles.result, styles.wrong].join(' ')}></div>
      <div className={styles.imageContainer}>
        <img className={!result ? styles.grayscale : ''} src={imageUrl} alt="categoryImage" />
      </div>
      <div ref={ref} className={styles.info}>
        <div className={styles.picName}>{gameInfo[imgNumber].name}</div>
        <div className={styles.innerInfo}>
          <p>{gameInfo[imgNumber].author}</p>
          <p>{gameInfo[imgNumber].year}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;