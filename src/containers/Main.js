import React, {Component} from 'react'
import { connect } from 'react-redux'
import Calculator from './CalculatorContainer'

const chooseMainContent = (content) => {
  switch(content) {
    case 'calculator':
      return(<div><Calculator/></div>)
    case 'todoList':
      return(<div><p>aaa</p></div>)
    default:
      return(<div>coming soon!</div>)
  }
}


class Main extends Component {
  render() {
    const {contents} = this.props
    return (
    <div>{chooseMainContent(contents)}</div>
    )
  }
}

const mapState = (state, ownProps) => ({
  contents: state.app.contents,
});


export default connect(mapState)(Main);
