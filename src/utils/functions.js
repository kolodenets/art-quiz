import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';

export function shuffleArray(answers) {
  for (let i = answers.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = answers[i]
    answers[i] = answers[j]
    answers[j] = temp
  }
  return answers;
}