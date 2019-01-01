import React, {Component} from 'react'
import Square from './Square'

// contant
const ROW_NUM = 6
const LINE_NUM = 6

// styles
const line = {margin: '0px', lineHeight: '0px'}

const Line = ({color, onClick}) => (
  <p style={{margin: '0px', lineHeight: '0px'}}>
    <Square color={color} onClick={() => onClick({ id:'', color: 'black', isPiece: true,})}/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
  </p>
)

class Board extends Component {
  render() {
    const { reversi, onSquareClick } = this.props
    return (
      <div style={{marginTop: '30px'}}>
        <Line color={reversi.square.color} onClick={onSquareClick}/>
        <Line/>
        <Line/>
        <Line/>
        <Line/>
        <Line/>
        <Square color='white'/>
        <Square color='black'/>
      </div>
    )
  }
}

export default Board
