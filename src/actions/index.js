import {
    DELETE_COIN,
    START_NEW_GAME,
    CHANGE_TURN,
} from '../constants/ActionTypes';

export function deleteCoin(coinId) {
    return { type: DELETE_COIN, coinId }
}

export function startNewGame() {
    return { type: START_NEW_GAME }
}

export function changeTurn() {
    return { type: CHANGE_TURN }
}
