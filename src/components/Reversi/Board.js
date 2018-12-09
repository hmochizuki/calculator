import React from 'react'
import Square from './Square'

const row = {margin: '0px', lineHeight: '0px'}

const Row = () => (
  <p style={row}>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
  </p>
)

const Board = () => (
  <div style={{marginTop: '30px'}}>
    <Row/>
    <Row/>
    <Row/>
    <Row/>
    <Row/>
    <Row/>
    <Square color='white'/>
    <Square color='black'/>
  </div>
)

export default Board
