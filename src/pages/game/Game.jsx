import React from 'react';
import PicturesGame from './PicturesGame';
import ArtistGame from './ArtistGame';

const Game = () => {
  const cardNumber = Number(localStorage.getItem('game-range'));
  const game = localStorage.getItem('quiz')

  return (
    <>
    {game === 'pictures' 
    ? <PicturesGame cardNumber={cardNumber}/>
    : <ArtistGame cardNumber={cardNumber}/>}
    </>
  );
};

export default Game;