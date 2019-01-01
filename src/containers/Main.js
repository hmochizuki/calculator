import React, {Component} from 'react'
import { connect } from 'react-redux'
import Calculator from './CalculatorContainer'
import Reversi from './Reversi'

const chooseMainContent = (content) => {
  switch(content) {
    case 'calculator':
      return(<div><Calculator/></div>)
    case 'reversi':
      return(<div><Reversi/></div>)
    default:
      return(<div>coming soon!</div>)
  }
}


class Main extends Component {
  render() {
    const {contents} = this.props
    return (
    <div style={{textAlign: 'center'}}>{chooseMainContent(contents)}</div>
    )
  }
}

const mapState = (state, ownProps) => ({
  contents: state.app.contents,
});


export default connect(mapState)(Main);
