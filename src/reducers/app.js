import * as actionTypes from '../utils/actionTypes/app';

const initialState = {
  contentsList : ['calculator', 'reversi'],
  contents : 'calculator',
}

const app = (state = initialState, action ) => {
  if(action.type === actionTypes.CHANGE_MAIN_CONTENTS) {
    return{
      ...state,
      contents: action.contentName,
    }
  }
  else {
    return{
      ...state,
    }
  }
}

export default app
