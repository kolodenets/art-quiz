import { Button } from 'antd';
import React from 'react';
import { btnStyle } from '../../utils/variables';


const MyButton = ({handleBtnClick, children, icon, btnStyles}) => {
  const btn = btnStyles || btnStyle
  return (
    <Button onClick={handleBtnClick} type="primary" style={btn}  icon={icon}>
      {children}
    </Button>
  );
};

export default MyButton;