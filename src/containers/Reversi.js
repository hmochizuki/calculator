import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onSquareClick } from '../reducers/reversi'
import Board from '../components/Reversi/Board'

const mapState = (state, ownProps) => ({
  reversi: state.reversi,
})

export default connect(
  mapState,
  {onSquareClick: onSquareClick}
)(Board);
