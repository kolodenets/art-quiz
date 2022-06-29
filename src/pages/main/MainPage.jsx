import React from 'react';
import MyButton from '../../UI/button/MyButton';
import styles from './MainPage.module.css'
import { useNavigate } from 'react-router-dom';
import LogoImage from './../../UI/logo/LogoImage';
import {SettingOutlined} from '@ant-design/icons'

const artistImg = '../artists-quiz.png'
const picturesImg = '../pictures-quiz.png'
const iconStyle = { fontSize: '42px', height: '42px'}
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
  padding: '4px 6px',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const MainPage = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate('/settings')
  }
  
  const openQuizCategories = (quiz) => {
    navigate('/categories')
    localStorage.setItem('quiz', `${quiz}`)
    
  }
  return (
    <div className='outerContainer'>
      <LogoImage/>
      <div className={styles.innerContainer}>
        <div onClick={() => openQuizCategories('artists')} className={styles.quizSelect}>
          <img className={styles.quizImg} src={artistImg}  alt="artist" />
          <p className={styles.quizTitle}><span style={{fontWeight: '700'}}>Artist </span>quiz</p>
        </div>
        <div onClick={() => openQuizCategories('pictures')} className={styles.quizSelect}>
          <img className={styles.quizImg} src={picturesImg}  alt="pictures" />
          <p className={styles.quizTitle} style={{marginTop: '-4px'}}><span style={{fontWeight: '700'}}>Pictures </span>quiz</p>
        </div>
      </div>
      <MyButton icon={<SettingOutlined style={iconStyle}/>} handleBtnClick={handleBtnClick} btnStyles={styledBtn}>SETTINGS</MyButton>
    </div>
  );
};

export default MainPage;