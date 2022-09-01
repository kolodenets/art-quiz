import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import MyButton from '../../UI/button/MyButton';
import LogoImage from '../../UI/logo/LogoImage';
import styles from '../categories/Categories.module.css'
import scoreStyle from './Score.module.css'
import { BsHouseFill } from "react-icons/bs";
import {AiOutlineBars} from "react-icons/ai"
import { iconStyle, styledBtn } from '../categories/Categories';
import ScoreCard from '../../components/card/ScoreCard';

const Score = () => {
  const [current, setCurrent] = useState(1)
  const ref = useRef();
  const imgRef = useRef();
  const imgNumArray = [];
  let firstImgNum = (current - 1)*10;
  while(firstImgNum < current*10) {
    imgNumArray.push(firstImgNum)
    firstImgNum++
  }
  const navigate = useNavigate();
  const handleHomeBtnClick = () => {
    navigate('/')
  }
  const handleCategoryBtnClick = () => {
    navigate('/categories')
  }
  const prev = () => {
    if(current === 1) {
      return null
    }
    setCurrent(prev => prev - 1)
  }
  const next = () => {
    if(current === 20) {
      return null
    }
    setCurrent(prev => prev + 1)
  }

  const handleNextClick = () => {
    ref.current.style.marginTop === '-282px' ? ref.current.style.marginTop = '0' : ref.current.style.marginTop = '-282px';
    ref.current.style.marginTop === '-282px' ? imgRef.current.style.transform = 'rotate(180deg)' : imgRef.current.style.transform = 'rotate(0deg)';
  }

  return (
    <div className='outerContainer'>
      <LogoImage/>
      <div className={styles.innerContainer}>
        <div className={styles.nav}>
          <MyButton handleBtnClick={handleHomeBtnClick} btnStyles={styledBtn} icon={<BsHouseFill style={iconStyle}/>}>Home</MyButton>
          <span className={styles.title}>Score</span>
          <MyButton handleBtnClick={handleCategoryBtnClick} btnStyles={styledBtn} icon={<AiOutlineBars style={iconStyle}/>}>Category</MyButton>
        </div>
        
      </div>
      <div className={scoreStyle.outerItemsContainer}>
        <div className={scoreStyle.itemsContainer} ref={ref}>
        {imgNumArray.map(item => <ScoreCard key={item} number={item} imgNumber={item} />)}
      </div>
      </div>
      <div className={scoreStyle.bottomBG}>
        <img src='../images/next-down.png' alt="prev" onClick={handleNextClick} ref={imgRef}/>
      </div>
      <div className={styles.btnContainer}>
        <button onClick={prev} className={ current === 1 ? [styles.btn, styles.visible].join(' ') : styles.btn}>
          <img src='../images/prev.png' alt="prev" />
        </button>
        <span className={styles.pages}>{current}/20</span>
        <button onClick={next} className={ current === 20 ? [styles.btn, styles.visible].join(' ') : styles.btn}>
          <img src='../images/next.png' alt="next" />
        </button>
      </div>
    </div>
  );
};

export default Score;