import React from 'react';
import MyButton from '../../UI/button/MyButton';
import LogoImage from '../../UI/logo/LogoImage';
import styles from './Categories.module.css'
import { BsHouseFill } from "react-icons/bs";
import {AiTwotoneStar} from "react-icons/ai"


const styledBtn = {
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

const iconStyle = { width: '40px', height: '40px'}

const Categories = () => {
  return (
    <div className='outerContainer'>
      <LogoImage/>
      <div className={styles.innerContainer}>
        <div className={styles.nav}>
          <MyButton btnStyles={styledBtn} icon={<BsHouseFill style={iconStyle}/>}>Home</MyButton>
          <span className={styles.title}>Categories</span>
          <MyButton btnStyles={styledBtn} icon={<AiTwotoneStar style={iconStyle}/>}>Score</MyButton>
        </div>
        <div className={styles.itemsContainer}>

        </div>
      </div>
    </div>
  );
};

export default Categories;