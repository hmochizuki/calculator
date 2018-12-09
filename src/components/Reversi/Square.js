import React from 'react';

const square = {
  backgroundColor: 'rgba(30, 150, 0)',
  width: '40px',
  height: '40px',
  border: 'outset black',
  borderWidth: '0.1px',
}
const piece = {
  borderRadius: '100%',
  width: '30px',
  height: '30px',
}

const Square = ({color}) => (
  <button style={square}>
    <div style={{...piece, backgroundColor: color}}>
    </div>
  </button>
)

export default Square
