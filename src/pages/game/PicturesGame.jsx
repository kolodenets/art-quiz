import React, { useState, useReducer} from 'react';
import { useNavigate } from 'react-router-dom';
import { BsHouseFill } from "react-icons/bs";
import LogoImage from './../../UI/logo/LogoImage';
import style from './Game.module.css'
import {  BsAlarmFill } from "react-icons/bs";
import { iconStyle, numbers } from '../categories/Categories';
import Popup from '../../components/modals/Popup';
import MyButton from '../../UI/button/MyButton';
import { shuffleArray } from '../../utils/functions';
import { styledBtn } from './../categories/Categories';

const playingCard = localStorage.getItem('game-range');

const initialState = {
  active: false, 
  correctAnsCount: 0,
  isCorrect: false,
  activeFinishPopup: false
};

function reducer(state, action) {
    switch (action.type) {
      case 'changeActive' :
        console.log('reducer')
        return {...state, active: action.payload};
      case 'changeCount':
        return {...state, correctAnsCount: state.correctAnsCount+1}  
      case 'changeIsCorrect':
        return {...state, isCorrect: action.payload}  
      case 'activeFinishPopup':
        return {...state, activeFinishPopup: action.payload}  
        default:
          throw new Error();
    }
  }

const PicturesGame = ({gameData}) => {
  const startingPic = Number(gameData[0].imageNum)

  const [next, setNext] = useState(startingPic)
  const [current, setCurrent] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState)

  const navigate = useNavigate();
  const openMainPage = () => {
    navigate('/')
  }

  const correctAns = gameData[current].author;

  const wrongAnswers = () => {
    return shuffleArray(gameData.filter(item => item.author !== correctAns)).slice(0, 3).map(item => item.author)
  };
  const gameAnswers = () => {
    return shuffleArray([correctAns, ...wrongAnswers()])
  }

  const checkAnswer = (answer) => {
    if( answer === correctAns) {
      dispatch({type: 'changeCount'})
      localStorage.setItem('correctAnswers', `${state.correctAnsCount}`)
      dispatch({type: 'changeIsCorrect', payload: true})
      dispatch({type: 'changeActive', payload: true})
      document.getElementById(`${ current + 1}`).style.backgroundColor = '#006635'
    }
    else {
      dispatch({type: 'changeIsCorrect', payload: false})
      dispatch({type: 'changeActive', payload: true})
      document.getElementById(`${ current + 1}`).style.backgroundColor = 'var(--main-bg-color)'
    }
  }

  const handlePopupBtnClick = () => {
    if (current < 9) {
      dispatch({type: 'changeActive', payload: false})
      setCurrent(prev => prev + 1)
      setNext(prev => prev + 1)
    } else {
      localStorage.setItem(`pictures-card${playingCard}-result`, `${state.correctAnsCount}`);
      dispatch({type: 'activeFinishPopup', payload: true})
    }
    
  }


  return (
    <div className='outerContainer'>
      <div className={style.header}>
        <LogoImage width={'94px'} margin={'20px 0 15px 0'}/>
        <div className={style.quizText}>Who is the author of this picture?</div>
        <p>{initialState.active}</p>
        <div className={style.timerContainer}>
          <BsAlarmFill  className={style.timer}/>
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
        {gameAnswers().map(answer => (
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
                          <img className={style.img} src={`../images/sizedImages/${gameData[current].imageNum}.jpg`}/>
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
                            <MyButton>Next Quiz</MyButton>
                          </div>
          </Popup>
      </div>
    </div>
  );
};

export default PicturesGame;