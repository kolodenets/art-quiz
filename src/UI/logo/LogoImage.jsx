import React from 'react';
import style from './LogoImage.module.css'

const logo = '../logo.png'

const LogoImage = ({width, margin}) => {
  return (
    <>
      <img
      style={{width: `${width}`, margin: `${margin}`}} 
      className={style.mainLogo} 
      src={logo} 
      alt="logo" />
    </>
  );
};

export default LogoImage;