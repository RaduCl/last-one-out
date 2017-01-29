import React from 'react';
import { Component } from 'react';
import Coin from './coin';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const self = this
        // if(this.props.endOfGame===true){
        //     this.props.alertWinner()
        // }
        // alert('The winner is: ')
        // setTimeout(this.render(), 500)
    }

    coins() {
        return this.props.coinsLeft.map(coin =>
            <Coin
                key={coin.id} id={coin.id}
                xPos={coin.xPos}
                yPos={coin.yPos}
                deleted={coin.deleted}
                handleClickCoin={this.props.handleClickCoin}
                endOfGame={this.props.endOfGame}
            />)
    }

    p1Coins() {
        return this.props.p1Coins.map(coin =>
            <Coin
                key={coin.id}
                id={coin.id}
                deleted={true}
            />)
    }

    p2Coins() {
        return this.props.p2Coins.map(coin =>
            <Coin
                key={coin.id}
                id={coin.id}
                deleted={true}
            />)
    }

    // congratulation(){
    //     if(this.props.activePlayer === 1){
    //         return 'Computer is the Winner !'
    //     } else {
    //         return 'Player 1 is the Winner !'
    //     }
    // }

    winnerAlert() {
        return (
            <div className="alert-winner button">
                { this.props.activePlayer === 1 ? `${this.props.p2} is the Winner !` : `${this.props.p1} is the Winner !`}
            </div>
        );
    }

    render() {
        return (
            <div className="my-row">
                <div className="player-aside">
                    { this.p1Coins() }
                </div>
                <div className="game-board">
                    { this.coins() }
                    { this.props.endOfGame ? this.winnerAlert() : null }
                </div>
                <div className="player-aside">
                    { this.p2Coins() }
                </div>
            </div>
        );
    }

}

export default Board;
