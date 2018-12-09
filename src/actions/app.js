import * as actionTypes from '../utils/actionTypes/app'

export const changeContent = (contentName) => ({
  type: actionTypes.CHANGE_MAIN_CONTENTS,
  contentName : contentName,
})
