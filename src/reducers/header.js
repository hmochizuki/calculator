//TODO headerをstate管理

const initialState = {
  name : ''
}

const header = (state) => {
  return{
    initialState,
    ...state,
}}

export default header
