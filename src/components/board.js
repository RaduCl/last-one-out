import React from 'react';
import { Component } from 'react';
import Coin from './coin';

function getCoins(coins, coinClickHandle, activePlayer, coinsRemovedThisTurn) {
    return coins.map(coin => (
        <Coin
            key={coin.id} id={coin.id}
            xPos={coin.xPos}
            yPos={coin.yPos}
            deleted={coin.deleted}
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
        <div className="alert-winner button">
            {str}
        </div>
    );
}

const Board = ({coins, p1Coins, p2Coins, activePlayer, coinsRemovedThisTurn, alerts, onCoinClick}) => (
    <div className="my-row">
        <div className="player-aside">
            { getPlayerCoins(p1Coins) }
        </div>
        <div className="game-board">
            { getCoins(coins, onCoinClick, activePlayer, coinsRemovedThisTurn) }
            { alerts ? alertMessage(alerts) : '' }
        </div>
        <div className="player-aside">
            { getPlayerCoins(p2Coins) }
        </div>
    </div>
)

// class Board extends Component {
//     constructor(props) {
//         super(props);
//     }

//     coins() {
//         return this.props.coinsLeft.map(coin =>
//             <Coin
//                 key={coin.id} id={coin.id}
//                 xPos={coin.xPos}
//                 yPos={coin.yPos}
//                 deleted={coin.deleted}
//                 handleClickCoin={this.props.handleClickCoin}
//                 endOfGame={this.props.endOfGame}
//             />)
//     }

//     p1Coins() {
//         return this.props.p1Coins.map(coin =>
//             <Coin
//                 key={coin.id}
//                 id={coin.id}
//                 deleted={true}
//             />)
//     }

//     p2Coins() {
//         return this.props.p2Coins.map(coin =>
//             <Coin
//                 key={coin.id}
//                 id={coin.id}
//                 deleted={true}
//             />)
//     }

//     winnerAlert() {
//         return (
//             <div className="alert-winner button">
//                 { this.props.activePlayer === 1 ? `${this.props.p2} is the Winner !` : `${this.props.p1} is the Winner !`}
//             </div>
//         );
//     }

//     render() {
//         return (
//             <div className="my-row">
//                 // <div className="player-aside">
//                 //     { this.p1Coins() }
//                 // </div>
//                 <div className="game-board">
//                     { this.coins() }
//                     { this.props.endOfGame ? this.winnerAlert() : null }
//                 </div>
//                 // <div className="player-aside">
//                 //     { this.p2Coins() }
//                 // </div>
//             </div>
//         );
//     }

// }

export default Board;
