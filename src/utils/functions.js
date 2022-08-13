
export function shuffleArray(answers) {
  for (let i = answers.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = answers[i]
    answers[i] = answers[j]
    answers[j] = temp
  }
  return answers;
}

export const audio = new Audio();
audio.volume = 0.5
