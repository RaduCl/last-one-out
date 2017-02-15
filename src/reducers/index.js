import { combineReducers } from 'redux';
import {
    DELETE_COIN,
    START_NEW_GAME,
    CHANGE_TURN,
    COINS_PER_TURN_OVERLIMIT,
} from '../constants/ActionTypes';

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


////////////////////////////////////
// coins reducer helper functions //
////////////////////////////////////

// getCoinPosition: Num -> Num -> Num
function getCoinPosition(min, max) {
    return Math.trunc((Math.random() * (max - min)) + min);
}

function generateCoins(x) {
    let arr = [];
    for (let i = 0; i < x; i += 1) {
        arr[i] = {
            id: i,
            xPos: `${getCoinPosition(9, 45)}vw`,
            yPos: `${getCoinPosition(30, 60)}vh`,
        };
    }
    return arr;
}

// startingNrOfCoins: -> Int between 10 and 30
function startingNrOfCoins() {
    return (Math.floor(Math.random() * 20) + 10);
}


function coins(state = [], action) {
    switch (action.type) {
        case DELETE_COIN:
            return state.filter(coin => coin.id !== action.payload.coinId);
        case START_NEW_GAME:
            return generateCoins(startingNrOfCoins());
        default:
            return state;
    }
}

function p1Coins(state = [], action) {
    switch(action.type) {
        case DELETE_COIN:
            return action.payload.activePlayer === 1
                ? state.concat({ id: action.payload.coinId })
                : state;
        case START_NEW_GAME:
            return [];
        default:
            return state;
    }
}


function p2Coins(state = [], action) {
    switch (action.type) {
        case DELETE_COIN:
            return action.payload.activePlayer === 2
                ? state.concat({ id: action.payload.coinId })
                : state;
        case START_NEW_GAME:
            return [];
        default:
            return state;
    }
}

function activePlayer(state = 0, action) {
    switch (action.type) {
        case CHANGE_TURN:
            return state === 1 ? 2 : 1;
        case START_NEW_GAME:
            return 1;//this should be randimized to return 1 or 2
        default:
            return state;
    }
}

function coinsRemovedThisTurn(state = 0, action) {
    switch (action.type) {
        case CHANGE_TURN:
        case START_NEW_GAME:
            return 0;
        case DELETE_COIN:
            return state + 1;
        default:
            return state;
    }
}

function alerts(state = '', action) {
    switch (action.type) {
        case COINS_PER_TURN_OVERLIMIT:
            return 'You can remove maximum 3 coins per turn';
        case CHANGE_TURN:
        case START_NEW_GAME:
            return '';
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    coins,
    p1Coins,
    p2Coins,
    activePlayer,
    coinsRemovedThisTurn,
    alerts
});

export default rootReducer;
