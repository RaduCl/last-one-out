import { connect } from 'react-redux';
import { startNewGame, changeTurn } from '../actions/index';
import Controls from '../components/controls';

const mapDispatchToProps = ({
    startGameHandle: startNewGame,
    changeTurnHandle: changeTurn,
})

const mapStateToProps = state => ({})

const ControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls)

export default ControlsContainer;
