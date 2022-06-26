import React from 'react';
import MyButton from '../../UI/button/MyButton';
import styles from './MainPage.module.css'
import { useNavigate } from 'react-router-dom';
import LogoImage from './../../UI/logo/LogoImage';
import {SettingOutlined} from '@ant-design/icons'
const artistImg = '../artists-quiz.png'
const picturesImg = '../pictures-quiz.png'


const MainPage = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate('/settings')
  }
  return (
    <div className={styles.outerContainer}>
      <LogoImage/>
      <div className={styles.innerContainer}>
        <div className={styles.quizSelect}>
          <img className={styles.quizImg} src={artistImg}  alt="artist" />
          <p className={styles.quizTitle}><span style={{fontWeight: '700'}}>Artist </span>quiz</p>
        </div>
        <div className={styles.quizSelect}>
          <img className={styles.quizImg} src={picturesImg}  alt="pictures" />
          <p className={styles.quizTitle} style={{marginTop: '-4px'}}><span style={{fontWeight: '700'}}>Pictures </span>quiz</p>
        </div>
      </div>
      <MyButton icon={<SettingOutlined />} handleBtnClick={handleBtnClick}>SETTINGS</MyButton>
    </div>
  );
};

export default MainPage;