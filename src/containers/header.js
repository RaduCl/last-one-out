import { connect } from 'react-redux';
import Header from '../components/header';
import { gameOver } from '../actions/index';

const mapDispatchToProps = ({
    gameOverDispatch: gameOver,
})

const mapStateToProps = state => ({
    coinsLeft: state.coins.length,
    activePlayer: state.activePlayer,
    p1: 'P1',
    p2: 'P2',
})

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default HeaderContainer;
