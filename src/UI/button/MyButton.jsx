import { Button } from 'antd';
import {SettingOutlined} from '@ant-design/icons'
import React from 'react';

const MyButton = () => {
  return (
    <Button type="primary" style={{backgroundColor: 'var(--main-bg-color)'}} size="large" icon={<SettingOutlined />}>
      SETTINGS 
    </Button>
  );
};

export default MyButton;