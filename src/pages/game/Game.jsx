import React from 'react';
import gameInfo from './../../images'
import PicturesGame from './PicturesGame';
import ArtistGame from './ArtistGame';

const Game = () => {
  const cardNumber = Number(localStorage.getItem('game-range'));
  const game = localStorage.getItem('quiz')
  const gameData = gameInfo.slice((cardNumber - 1)*10, cardNumber*10 ) 

  return (
    <>
    {game === 'pictures' 
    ? <PicturesGame gameData={gameData}/> 
    : <ArtistGame gameData={gameData}/>}
    </>
  );
};

export default Game;