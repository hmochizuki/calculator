import { connect } from 'react-redux';
import Header from '../components/Header/Header'

const mapState = (state, ownProps) => ({
  app: state.app,
});

export default connect(mapState)(Header);
