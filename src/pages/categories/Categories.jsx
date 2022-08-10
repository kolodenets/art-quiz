import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../UI/button/MyButton';
import LogoImage from '../../UI/logo/LogoImage';
import styles from './Categories.module.css'
import { BsHouseFill } from "react-icons/bs";
import {AiTwotoneStar} from "react-icons/ai"
import Card from '../../components/card/Card';


export const styledBtn = {
  backgroundColor: 'var(--main-bg-color)',
  outline: 'none', 
  border: 'none', 
  width: '150px', 
  height: '50px', 
  fontSize: '18px', 
  lineHeight: '22px',
  textTransform: 'upperCase',
  display: 'flex',
  padding: '7px 18px 7px 7px',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export const iconStyle = { width: '40px', height: '40px'}

export const numbers = [1,2,3,4,5,6,7,8,9,10]

const Categories = () => {
  const game = localStorage.getItem('quiz');
  const navigate = useNavigate();
  const handleHomeBtnClick = () => {
    navigate('/')
  }
  const handleScoreBtnClick = () => {
    navigate('/score')
  }

  return (
    <div className='outerContainer'>
      <LogoImage/>
      <div className={styles.innerContainer}>
        <div className={styles.nav}>
          <MyButton handleBtnClick={handleHomeBtnClick} btnStyles={styledBtn} icon={<BsHouseFill style={iconStyle}/>}>Home</MyButton>
          <span className={styles.title}>Categories</span>
          <MyButton handleBtnClick={handleScoreBtnClick} btnStyles={styledBtn} icon={<AiTwotoneStar style={iconStyle}/>}>Score</MyButton>
        </div>
        
      </div>
      <div className={styles.itemsContainer}>
        {numbers.map(item => <Card key={item} number={item} imgNumber={item} game={game}/>)}
        
      </div>
    </div>
  );
};

export default Categories;