import { connect } from 'react-redux';
import { deleteCoin } from '../actions/index';
import Board from '../components/board';

const mapStateToProps = (state) => ({
    coins: state.coins,
    p1Coins: state.p1Coins,
    // p2Coins: state.p2Coins,
})

const mapDispatchToProps = ({
    onCoinClick: deleteCoin,
});

const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default BoardContainer;
