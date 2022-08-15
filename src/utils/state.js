export const initialState = {
  active: false, 
  correctAnsCount: 0,
  isCorrect: false,
  activeFinishPopup: false
};

export function reducer(state, action) {
    switch (action.type) {
      case 'changeActive' :
        return {...state, active: action.payload};
      case 'changeCount':
        return {...state, correctAnsCount: state.correctAnsCount+1}  
      case 'resetCount':
        return {...state, correctAnsCount: 0}  
      case 'changeIsCorrect':
        return {...state, isCorrect: action.payload}  
      case 'activeFinishPopup':
        return {...state, activeFinishPopup: action.payload}  
        default:
          return state;
    }
  }