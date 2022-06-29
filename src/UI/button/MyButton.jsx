import { Button } from 'antd';
import React from 'react';
const btnStyle = {backgroundColor: 'var(--main-bg-color)',
                  outline: 'none', 
                  border: 'none', 
                  width: '150px', 
                  height: '50px', 
                  fontSize: '18px', 
                  lineHeight: '22px',
                  textTransform: 'upperCase',
                  }

const MyButton = ({handleBtnClick, children, icon, btnStyles}) => {
  const btn = btnStyles || btnStyle
  return (
    <Button onClick={handleBtnClick} type="primary" style={btn}  icon={icon}>
      {children}
    </Button>
  );
};

export default MyButton;