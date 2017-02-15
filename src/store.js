import { createStore } from 'redux';


// import rootReducer
import rootReducer from './reducers/index';

const defaultState = {
    coins: [],
    p1Coins: [],
    p2Coins: [],
    activePlayer: 0,
    coinsRemovedThisTurn: 0,
}

// const defaultState = {
//     P1: 'Playa1',
//     P2: 'Pleya2',
//     p1Coins: [],
//     p2Coins: [],
//     coins: [],
//     activePlayer: 0,
//     coinsRemovedThisTurn: 0,
//     endOfGame: false,
// };

const store = createStore(
    rootReducer,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
