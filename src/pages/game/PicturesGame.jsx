import React, { useState} from 'react';
import LogoImage from './../../UI/logo/LogoImage';
import style from './Game.module.css'
import {  BsAlarmFill } from "react-icons/bs";
import { numbers } from '../categories/Categories';

const PicturesGame = ({gameData}) => {
  const startingPic = Number(gameData[0].imageNum)
  const [next, setNext] = useState(startingPic)
  const [current, setCurrent] = useState(0);

  const correctAns = gameData[current].author;
  const wrongAnswers = shuffleArray(gameData.filter(item => item.author !== correctAns)).slice(0, 3).map(item => item.author);
  const gameAnswers = shuffleArray([correctAns, ...wrongAnswers])

  function shuffleArray(answers) {
    for (let i = answers.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = answers[i]
      answers[i] = answers[j]
      answers[j] = temp
    }
    return answers;
  }

  const checkAnswer = (answer) => {
    if( answer === correctAns) {
      document.getElementById(`${ current + 1}`).style.backgroundColor = '#006635'
      setCurrent(prev => prev + 1)
      setNext(prev => prev + 1)
    }
    else {
      document.getElementById(`${ current + 1}`).style.backgroundColor = 'var(--main-bg-color)'
      setCurrent(prev => prev + 1)
      setNext(prev => prev + 1)
    }
  }
  return (
    <div className='outerContainer'>
      <div className={style.header}>
        <LogoImage width={'94px'} margin={'20px 0 15px 0'}/>
        <div className={style.quizText}>Who is the author of this picture?</div>
        <div className={style.timerContainer}>
          <BsAlarmFill className={style.timer}/>
          <p>03:15</p>
        </div>
      </div>
      <div className={style.innerContainer}>
        <img className={style.image}
        src={`../images/full/${next}full.jpg`} 
        style={{width: '1000px', height: '650px'}}
        alt='pic'
        /> 
        <div className={style.results}>{
          numbers.map(numb => (
            <div key={numb} 
            className={style.circle}
            id={numb}></div>
          ))
          }</div>
      </div>
      <div className={style.answers}>
        {gameAnswers.map(answer => (
          <div key={answer} 
                className={style.answer}
                onClick={() => checkAnswer(answer)}
          >
            {answer}
          </div>
        ))}
          
          <div className={style.vertical}></div>
          <div className={style.horizontal}></div>
      </div>
    </div>
  );
};

export default PicturesGame;