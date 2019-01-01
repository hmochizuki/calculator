import React from 'react'
import Piece from './Piece'

const square = {
  backgroundColor: 'rgba(30, 150, 0)',
  width: '40px',
  height: '40px',
  border: 'outset black',
  borderWidth: '0.1px',
}

const Square = ({color, onClick}) => (
  <button style={square} onClick={onClick}>
    <Piece color={color}/>
  </button>
)

export default Square
