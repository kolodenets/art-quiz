import React, { useState, useReducer, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { BsHouseFill } from "react-icons/bs";
import LogoImage from './../../UI/logo/LogoImage';
import style from './Game.module.css'
import {  BsAlarmFill } from "react-icons/bs";
import { iconStyle, numbers } from '../categories/Categories';
import Popup from '../../components/modals/Popup';
import MyButton from '../../UI/button/MyButton';
import { audio, shuffleArray } from '../../utils/functions';
import { styledBtn } from './../categories/Categories';
import gameInfo from './../../images'
import { reducer, initialState } from '../../utils/state';
import Timer from '../../components/timer/Timer';

const PicturesGame = ({ cardNumber }) => {
  const [card, setCard] = useState(cardNumber)

  let gameData = gameInfo.slice((card - 1)*10, card*10 )
  let startingPic = Number(gameData[0].imageNum)

  const [next, setNext] = useState(startingPic)
  const [current, setCurrent] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState)

  const navigate = useNavigate();

  const openMainPage = () => {
    navigate('/')
  }

  useEffect(() => {
    gameData = gameInfo.slice((card - 1)*10, card*10 );
    startingPic = Number(gameData[0].imageNum)
    setNext(startingPic)
    setCurrent(0)
    dispatch({type: 'resetCount'})
  }, [card])


  const correctAns = gameData[current].author;

  const wrongAnswers =  shuffleArray([...new Set(gameData.filter(item => item.author !== correctAns).map(item => item.author))]).slice(0, 3)

  const gameAnswers =  shuffleArray([correctAns, ...wrongAnswers])

  const checkAnswer = (answer) => {
    if( answer === correctAns) {
      audio.src = '../sounds/correct-answer-sound.mp3'
      audio.play()
      dispatch({type: 'changeCount'})
      localStorage.setItem('correctAnswers', `${state.correctAnsCount}`)
      dispatch({type: 'changeIsCorrect', payload: true})
      dispatch({type: 'changeActive', payload: true})
      document.getElementById(`${ current + 1}`).style.backgroundColor = '#006635'
    }
    else {
      audio.src = '../sounds/incorrect-answer-sound.mp3'
      audio.play()
      dispatch({type: 'changeIsCorrect', payload: false})
      dispatch({type: 'changeActive', payload: true})
      document.getElementById(`${ current + 1}`).style.backgroundColor = 'var(--main-bg-color)'
    }
  }

  const handlePopupBtnClick = () => {
    const playingCard = localStorage.getItem('game-range');
    localStorage.setItem(`pictures-card${playingCard}-result`, `${state.correctAnsCount}`);
    if (current < 9) {
      dispatch({type: 'changeActive', payload: false})
      setCurrent(prev => prev + 1)
      setNext(prev => prev + 1)
    } else {
      dispatch({type: 'changeActive', payload: false})
      dispatch({type: 'activeFinishPopup', payload: true})
    }
  }

    const openNextQuiz = () => {
      //reset color of circles
      let circlesArr = [...document.querySelectorAll('.circle')];
      circlesArr.forEach(i => i.style.backgroundColor = '#c4c4c4');

      const currentQuiz = localStorage.getItem('game-range');
      localStorage.setItem('game-range', `${Number(currentQuiz) + 1}`);
      setCard(Number(currentQuiz) + 1)
      dispatch({type: 'activeFinishPopup', payload: false})
    }

  return (
    <div className='outerContainer'>
      <div className={style.header}>
        <LogoImage width={'94px'} margin={'20px 0 15px 0'}/>
        <div className={style.quizText}>Кто автор этой картины?</div>
        <p>{initialState.active}</p>
        <div className={style.timerContainer}>
          <BsAlarmFill  className={style.timer}/>
          <Timer initialMinute={2} initialSeconds={0}/>
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
            className='circle'
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

          <Popup  active={state.active}>
                          <div className={state.isCorrect ? style.correct : style.wrong}></div>
                          <img className={style.img} src={`../images/sizedImages/${gameData[current].imageNum}.jpg`} alt='big'/>
                          <p>{gameData[current].name}</p>
                          <p>{gameData[current].author}</p>
                          <p>{gameData[current].year}</p>
                          <MyButton handleBtnClick={handlePopupBtnClick}>Next</MyButton>
          </Popup>

          <Popup  active={state.activeFinishPopup}>
                          <p className={style.congrat}>CONGRATULATIONS !</p>
                          <p className={style.result}>{state.correctAnsCount} / 10</p>
                          <div className={style.resultImg}></div>
                          <div className={style.btnsContainer}>
                            <MyButton icon={<BsHouseFill style={iconStyle}/>} handleBtnClick={openMainPage} btnStyles={styledBtn}>Home</MyButton>
                            <MyButton handleBtnClick={openNextQuiz}>Next Quiz</MyButton>
                          </div>
          </Popup>
      </div>
    </div>
  );
};

export default PicturesGame;