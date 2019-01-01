// actionTypes
const REVERSI = 'reversi'
const SET_PEICE = 'set_piece'

// actions
export const onSquareClick = (square) => ({
  type: SET_PEICE,
  square, 
})

// initialState
const initialState = {
  square: {
    id: '',
    isPiece: false,
    color: 'white', 
  }
}

const reversi = (state = initialState, action ) => {
  const {type} = action
  if(type === SET_PEICE) {
    return{
      ...state,
      square: action.square,
    }
  }
  else {
    return{
      ...state,
    }
  }
}

export default reversi
