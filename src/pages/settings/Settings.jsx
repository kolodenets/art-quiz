import React, { useState } from 'react';
import MyButton from '../../UI/button/MyButton';
import styles from './Settings.module.css'
import { BsVolumeUpFill, BsVolumeMuteFill, BsAlarmFill } from "react-icons/bs";
import LogoImage from './../../UI/logo/LogoImage';




const Settings = () => {
  const [value, setValue] = useState(50)
  return (
    <div className={styles.outerContainer}>
      <LogoImage/>
      <p className={styles.settingsTitle}>SETTINGS</p>
      <div className={styles.innerContainer}>
        <div className={styles.setting}>
          <BsVolumeUpFill className={styles.soundSvg}/>
          <div className={styles.soundBar}>
            <BsVolumeMuteFill className={styles.mute}/>
            <div className={styles.slideContainer}>
              <input type="range" 
                      className={styles.soundSlider}
                      style={{background: `linear-gradient(90deg, var(--main-bg-color) ${value}%, #e5e5e5 ${value}%)`}} 
                      min="0" 
                      max="100" 
                      step="1" 
                      value={value}
                      onInput={(e) => setValue(e.target.value)}/>
            </div>
          </div>
            <p className={styles.settingsVol}>VOLUME</p>
        </div>

        <div className={styles.setting}>
          <BsAlarmFill className={styles.time}/>
          <div className={styles.checkboxCont}>
            <input type="checkbox"
                    className={styles.checkbox}
                    id='time-checkbox'/>
                    <label htmlFor="time-checkbox"></label>
            <p className={styles.timeText}>ON/OFF</p>
          </div>
          <p className={styles.settingsTime}>Time game</p>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <MyButton>SAVE</MyButton>
        <MyButton>DEFAULTS</MyButton>
      </div>
      
    </div>
  );
};

export default Settings;