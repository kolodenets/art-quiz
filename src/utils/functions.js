
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


export const finalResult = (game) => {
  let ar = [];
  for (let i = 1; i < 11; i++) {
    ar.push(+localStorage.getItem(`${game}-card${i}-result`))
  }
  return ar.reduce((a,b) => a + b, 0)
};