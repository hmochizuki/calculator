import * as actionTypes from '../utils/actionTypes/app';

const initialState = {
  contents : 'calculator'
}

const app = (state = initialState, action ) => {
  if(action.type === actionTypes.CHANGE_MAIN_CONTENTS) {
    return{
      ...state,
      contents: state.contents
    }
  }
  else {
    return{
      ...state,
    }
  }
}

export default app
