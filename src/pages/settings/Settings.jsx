import React, { useEffect, useState } from 'react';
import MyButton from '../../UI/button/MyButton';
import styles from './Settings.module.css'
import { BsVolumeUpFill, BsVolumeMuteFill, BsAlarmFill } from "react-icons/bs";
import LogoImage from './../../UI/logo/LogoImage';
import { useNavigate } from 'react-router-dom';




const Settings = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(50)
  const [checked, setChecked] = useState(false)
  const handleSaveBtnClick = () => {
    localStorage.setItem('volume', `${value}`)
    localStorage.setItem('timer', `${checked}`)
    navigate('/')
  }
  
  const handleDefaultBtnClick = () => {
    setChecked(false)
    setValue(50) 
  }
  const isChecked = () => {
    return checked ? setChecked(false) : setChecked(true)
  }
  useEffect(() => {
    setValue(localStorage.getItem('volume') === null ? 50 : Number(localStorage.getItem('volume')))
    setChecked(localStorage.getItem('timer') === 'true' ? true : false)
  }, [])

  return (
    <div className='outerContainer'>
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
                    id='time-checkbox'
                    onChange={isChecked}
                    checked={checked}/>
            <label htmlFor="time-checkbox"></label>
            <p className={styles.timeText}>ON/OFF</p>
          </div>
          <p className={styles.settingsTime}>Time game</p>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <MyButton handleBtnClick={handleSaveBtnClick}>SAVE</MyButton>
        <MyButton handleBtnClick={handleDefaultBtnClick}>DEFAULTS</MyButton>
      </div>
    </div>
  );
};

export default Settings;