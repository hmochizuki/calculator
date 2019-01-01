import React from 'react'

const piece = {
  borderRadius: '100%',
  width: '30px',
  height: '30px',
}

const Piece = ({color}) => (
  <div style={{...piece, backgroundColor: color}}></div>
)

export default Piece