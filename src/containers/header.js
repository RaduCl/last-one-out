import { connect } from 'react-redux';
import Header from '../components/header';

// const mapDispatchToProps = ({
//     startGameHandle: startNewGame,
//     changeTurnHandle: changeTurn,
// })

const mapStateToProps = state => ({
    coinsLeft: state.coins.length,
    activePlayer: state.activePlayer,
    p1: 'P1',
    p2: 'P2',
})

const HeaderContainer = connect(
    mapStateToProps
)(Header)

export default HeaderContainer;
