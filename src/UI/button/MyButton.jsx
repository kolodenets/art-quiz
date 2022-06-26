import { Button } from 'antd';
import React from 'react';


const MyButton = ({handleBtnClick, children, icon}) => {
  return (
    <Button onClick={handleBtnClick} type="primary" style={{backgroundColor: 'var(--main-bg-color)', outline: 'none', border: 'none', width: '150px', height: '50px'}} size="large" icon={icon}>
      {children}
    </Button>
  );
};

export default MyButton;