import React from 'react';
import { useNavigate } from 'react-router-dom';

const logo = '../logo.png'

const LogoImage = () => {
  const navigate = useNavigate();
  const openMainPage = () => {
    navigate('/')
  }
  return (
    <>
      <img onClick={openMainPage} className='mainLogo' src={logo} alt="logo" />
    </>
  );
};

export default LogoImage;