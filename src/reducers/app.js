import * as actionTypes from '../utils/actionTypes/app';

const initialState = {
  status : 'calculator'
}

const app = (state = initialState, action ) => {
  console.log('state', state)
  console.log('action', action)
  if(action.type === actionTypes.CHANGE_MAIN_CONTENTS) {
    console.log(action.type)
    return{
      ...state,
      status: 'calculator'
    }
  }
  else {
    return{
      ...state,
    }
  }
}

export default app
