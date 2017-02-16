import {
    DELETE_COIN,
    START_NEW_GAME,
    CHANGE_TURN,
    COINS_PER_TURN_OVERLIMIT,
    COINS_PER_TURN_UNDERLIMIT,
    GAME_OVER,
} from '../constants/ActionTypes';
import store from '../store';

export function deleteCoin(coinId, activePlayer, coinsRemovedThisTurn) {
    if (coinsRemovedThisTurn > 2) {
        return {
            type: COINS_PER_TURN_OVERLIMIT,
        }
    }
    return {
        type: DELETE_COIN,
        payload: {
            coinId,
            activePlayer,
            coinsRemovedThisTurn,
        },
    }
}

export function startNewGame() {
    return { type: START_NEW_GAME };
}

export function changeTurn(coinsRemovedThisTurn) {
    if(store.getState().gameOver) return;
    if (coinsRemovedThisTurn === 0) {
        return { type: COINS_PER_TURN_UNDERLIMIT }
    }
    return { type: CHANGE_TURN };
}

export function gameOver() {
    return { type: GAME_OVER };
}
