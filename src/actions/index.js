import {
    DELETE_COIN,
    START_NEW_GAME,
    CHANGE_TURN,
    COINS_PER_TURN_OVERLIMIT,
    COINS_PER_TURN_UNDERLIMIT,
} from '../constants/ActionTypes';

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
    if (coinsRemovedThisTurn === 0) {
        return {
            type: COINS_PER_TURN_UNDERLIMIT,
        }
    }
    return { type: CHANGE_TURN };
}
