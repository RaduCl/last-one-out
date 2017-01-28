import React from 'react';
import { Component } from 'react';
import Title from './title';
import Head from './header';
import Board from './board';
import Controls from './controls';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            P1: 'Playa1',
            P2: 'Pleya2',
            coinsLeft: [],
            activePlayer: 0,
            coinsRemovedThisTurn: 0,
            endOfGame: false,
        };

        // this.nextLoosingPosition = this.nextLoosingPosition.bind(this);
        this.removeCoin = this.removeCoin.bind(this);
        this.changePlayerTurn = this.changePlayerTurn.bind(this);
        this.startNewGame = this.startNewGame.bind(this);
        // this.computerPlay = this.computerPlay.bind(this);
    }

    getCoinPosition(min, max) {
        return Math.trunc((Math.random() * (max - min)) + min);
    }

    startingNrOfCoins() {
        return (Math.floor(Math.random() * 20) + 10);
    }


    generateCoins(x) {
        let arr = [];
        for (let i = 0; i < x; i += 1) {
            arr.push({
                id: i,
                xPos: `${this.getCoinPosition(30, 70)}vw`,
                yPos: `${this.getCoinPosition(30, 70)}vh`,
            });
        }
        return arr;
    }

    // TODO figure a way to trigger computerPlay after setState(leftCoins)
    choseStartingPlayer() {
        if (this.startingNrOfCoins() < 20) {
            this.setState({ activePlayer: 1 });
            return 1;
        }

        this.setState({ activePlayer: 2 });
        return 2;
        // this.computerPlay();
    }

    changePlayerTurn() {
        if (this.state.activePlayer === 1) {
            this.setState({ activePlayer: 2, coinsRemovedThisTurn: 0 });
            // this.computerPlay();
        } else {
            this.setState({ activePlayer: 1, coinsRemovedThisTurn: 0 });
        }
    }


    // computerPlay() {
    //     const coinsLeft = this.state.coinsLeft.length;
    //     // const nextLoosingPosition = this.nextLoosingPosition(coinsLeft);
    //     // const coinId = this.state.coinsLeft.slice(0, 1);

    //     function nextLoosingPosition(x) {
    //         if (x % 4 === 1) return x;
    //         nextLoosingPosition(x - 1);
    //     }

    //     const t = nextLoosingPosition(coinsLeft);

    //     const deltaToNextL = coinsLeft - t;
    //     console.log('deltaToNextL: ', deltaToNextL);

    //     if (deltaToNextL === 0) {
    //         setTimeout(() => {
    //             this.removeCoin(this.state.coinsLeft[0]);
    //             this.setState({ activePlayer: 1 });
    //             return;
    //         }, 1000);
    //         // this.changePlayerTurn();
    //     } else {
    //         if (deltaToNextL > 3) {
    //             setTimeout(() => {
    //                 this.removeCoin(this.state.coinsLeft[0]);
    //                 // this.setState({activePlayer: 1})
    //                 this.changePlayerTurn();
    //                 return;
    //             }, 1000);
    //         } else {
    //             for (let i = 0; i < deltaToNextL; i += 1) {
    //                 setTimeout(() => {
    //                     this.removeCoin(this.state.coinsLeft[0]);
    //                 }, 1000);
    //             }
    //             // this.setState({activePlayer: 1})
    //             this.changePlayerTurn();
    //             return;
    //         }
    //     }
    // }

    // computerRemoveCoin() {
    //     this.setState({
    //         coinsLeft: this.state.coinsLeft.slice(-1)
    //     })
    //     if(this.state.coinsLeft.length===1) this.setState({endOfGame: true})
    // }

    removeCoin(id) {
        let cpt = this.state.coinsRemovedThisTurn;
        cpt += 1;
        console.log('cpt: ', cpt);
        const arr = this.state.coinsLeft
            .filter(coin => coin.id !== id);

        if (cpt < 4) {
            this.setState({
                coinsLeft: arr,
                coinsRemovedThisTurn: cpt,
            });

            // if player removed max coin count
            if (cpt === 3) {
                // check game ended state
                if (this.state.coinsLeft.length === 1) {
                    this.setState({
                        endOfGame: true,
                        activePlayer: this.state.activePlayer === 1 ? 2 : 1,
                    });
                } else {
                    this.changePlayerTurn();
                }
            }
        }
    }

    startNewGame() {
        this.setState({
            coinsLeft: this.generateCoins(this.startingNrOfCoins()),
            activePlayer: this.choseStartingPlayer(),
            coinsRemovedThisTurn: 0,
            endOfGame: false,
        });
        // this.beginPlaying();
    }

    // beginPlaying() {
    //     // check is computer activePlayer
    //     if (this.state.activePlayer === 2) this.computerPlay();
    // }

    render() {
        return (
            <div>
                <Title />
                <Head
                    coinsLeft={this.state.coinsLeft.length}
                    activePlayer={this.state.activePlayer}
                    p1={this.state.P1}
                    p2={this.state.P2}
                />
                <Board
                    coinsLeft={this.state.coinsLeft}
                    handleClickCoin={coinId => this.removeCoin(coinId)}
                    endOfGame = {this.state.endOfGame}
                    alertWinner = {() => this.alertWinner}
                    activePlayer = {this.state.activePlayer}
                />
                <Controls
                    startGameHandle={this.startNewGame}
                    changeTurnHandle={this.changePlayerTurn}
                />
            </div>
        );
    }
}
