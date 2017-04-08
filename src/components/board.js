import React from 'react';
import { Component } from 'react';
import Coin from './coin';

function getCoins(coins, coinClickHandle, activePlayer, coinsRemovedThisTurn, gameOver) {
    return coins.map(coin => (
        <Coin
            key={coin.id} id={coin.id}
            xPos={coin.xPos}
            yPos={coin.yPos}
            deleted={coin.deleted}
            gameOver={gameOver}
            handleClickCoin={() => coinClickHandle(coin.id, activePlayer, coinsRemovedThisTurn)} />
        )
    )
}

function getPlayerCoins(coins) {
    return coins.map(coin =>
        (<Coin
            key={coin.id}
            id={coin.id}
            deleted={true}
        />)
    )
}

function alertMessage(str) {
    return (
        <div className="alert-box warning button">
            {str}
        </div>
    );
}

function winnerAlert(activePlayer) {
    return (
        <div className="alert-box winner button">
            { activePlayer === 1 ? `P1 is the Winner !` : `P2 is the Winner !`}
        </div>
    );
}


const Board = ({coins, p1Coins, p2Coins, activePlayer, coinsRemovedThisTurn, alerts, gameOver, onCoinClick}) => (
    <div className="my-row">
        <div className="player-aside">
            { getPlayerCoins(p1Coins) }
        </div>
        <div className="game-board">
            { getCoins(coins, onCoinClick, activePlayer, coinsRemovedThisTurn, gameOver) }
            { alerts ? alertMessage(alerts) : '' }
            { coins.length === 1 ? winnerAlert(activePlayer) : '' }
        </div>
        <div className="player-aside">
            { getPlayerCoins(p2Coins) }
        </div>
    </div>
)

export default Board;
