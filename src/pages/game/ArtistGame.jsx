import React, { useState, useReducer, useEffect, useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import { BsHouseFill } from "react-icons/bs";

import LogoImage from './../../UI/logo/LogoImage';
import style from './Game.module.css'
import {  BsAlarmFill } from "react-icons/bs";
import { iconStyle, numbers } from '../categories/Categories';
import Popup from '../../components/modals/Popup';
import MyButton from '../../UI/button/MyButton';
import { audio, shuffleArray, finalResult } from '../../utils/functions';
import { styledBtn } from './../categories/Categories';
import gameInfo from './../../images'
import { reducer, initialState } from '../../utils/state';
import Timer from '../../components/timer/Timer';

const quizInfo = gameInfo.slice(100)

const ArtistGame = ({cardNumber}) => {
  const [card, setCard] = useState(cardNumber)
  let gameData = quizInfo.slice((card - 1)*10, card*10 )
  const [current, setCurrent] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState)

  const navigate = useNavigate();
  const openMainPage = () => {
    navigate('/')
  }

  const correctAns = gameData[current].imageNum;

  const wrongAnswers = useMemo(() => {
    return shuffleArray([...new Set(gameInfo.filter(item => item.imageNum !== correctAns).map(item => item.imageNum))]).slice(0, 3)
  }, [correctAns]) 

  const gameAnswers = useMemo(() => {
    return shuffleArray([correctAns, ...wrongAnswers])
  }, [correctAns, wrongAnswers]) 

  const openFinishPopup = () => {
      dispatch({type: 'changeActive', payload: false})
      dispatch({type: 'activeFinishPopup', payload: true})
  }

  const checkAnswer = (answer) => {
    if( answer === correctAns) {
      audio.src = '../sounds/correct-answer-sound.mp3'
      audio.play()
      dispatch({type: 'changeCount'})
      localStorage.setItem('correctAnswers', `${state.correctAnsCount}`)

      //set score image result
      localStorage.setItem(`score-card-${gameData[current].imageNum}`, 'yes')

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

  const openFinalResult = () => {
    dispatch({type: 'changeActive', payload: false})
    dispatch({type: 'activeFinalPopup', payload: true})
  }

  const handlePopupBtnClick = () => {
    const playingCard = localStorage.getItem('game-range');
    localStorage.setItem(`artists-card${playingCard}-result`, `${state.correctAnsCount}`);
    if (current < 9) {
      dispatch({type: 'changeActive', payload: false})
      setCurrent(prev => prev + 1)
    } else {
      if (finalResult('artists') === 100) {
        openFinalResult()
      }
      else {
        openFinishPopup()
      }
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

    // check is timer on
    const isTimer = localStorage.getItem('timer') === 'true' ? true : false;

    useEffect(() => {
      gameData = quizInfo.slice((card - 1)*10, card*10 );
      setCurrent(0)
      dispatch({type: 'resetCount'})
    }, [card])

  return (
    <div className='outerContainer'>
      <div className={style.header}>
        <LogoImage width={'94px'} margin={'20px 0 15px 0'}/>
        <div className={style.quizText}>Какую из этих картин написал {gameData[current].author}?</div>
        <div className={style.timerContainer}>
          {isTimer && <div className={style.timerInnerContainer}>
          <BsAlarmFill  className={style.timer}/>
          <Timer initialMinute={2} initialSeconds={0} openFinishPopup={openFinishPopup} card={card}/>
        </div>}
        </div>
      </div>
      <div className={style.innerContainerArt}>
        <div className={style.imgContainer}>
          {gameAnswers.map(item => (
            <img className={style.artistQuizImage}
            key={item}
                    src={`../images/sizedImages/${item}.jpg`} 
                    alt='pic'/> 
          ))}
        </div>
        <div className={style.results}>{
          numbers.map(numb => (
            <div key={numb} 
            className='circle'
            id={numb}></div>
          ))
          }</div>
      </div>
      <div className={style.answers}>
        {gameAnswers.map((answer, i) => (
          <div key={answer} 
                className={style.answer}
                onClick={() => checkAnswer(answer)}
          >
            {i+1}
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
                            <MyButton icon={<BsHouseFill style={iconStyle}/>} handleBtnClick={openMainPage} btnStyles={styledBtn} style={{margin: '0 40px 0 0'}}>Home</MyButton>
                            {card < 10 && <MyButton handleBtnClick={openNextQuiz}>Next Quiz</MyButton>}
                          </div>
          </Popup>
          <Popup active={state.activeFinalPopup}>
            <div className={style.finalPopup}>
              <div style={{marginBottom: '80px'}}>
                <MyButton icon={<BsHouseFill style={iconStyle}/>} handleBtnClick={openMainPage} btnStyles={styledBtn}>Home</MyButton>
              </div>
            </div>
          </Popup>
      </div>
    </div>
  );
};

export default ArtistGame;