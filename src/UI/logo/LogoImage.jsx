import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './LogoImage.module.css'

const logo = '../logo.png'

const LogoImage = ({width, margin}) => {
  const navigate = useNavigate();
  const openMainPage = () => {
    navigate('/')
  }
  return (
    <>
      <img
      style={{width: `${width}`, margin: `${margin}`}} 
      onClick={openMainPage} 
      className={style.mainLogo} 
      src={logo} 
      alt="logo" />
    </>
  );
};

export default LogoImage;