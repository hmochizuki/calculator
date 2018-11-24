import React from 'react'
import { connect } from 'react-redux';
import Calculator from './CalculatorContainer'

const Main = ({ contents }) => {
  switch(contents) {
    case 'calculator':
      return(
        <div>
          <Calculator contents={contents}/>
        </div>
      )
      case 'todoList':
        return(
          <div>
            <p>aaa</p>
          </div>
        )
    default:
      return(
        <div>
          coming soon!
        </div>
      )
  }
}

export default connect()(Main);
