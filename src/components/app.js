import React from 'react';
import { Component } from 'react';
import Title from './title.js'
import Head from './header.js'
import Board from './board.js'
import Controls from './controls.js'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            coinsLeft: [],
            activePlayer: null,
            p1: false,
            p2: false,
            coinsPerTurn: 0,
            endOfGame: false
        }
    }

    startingNrOfCoins() {
        return Math.floor(Math.random()*20 + 10)
    }

    coinsArr(x){
        let arr=[];
        for(let i = 0; i<x; i++){
            arr.push(i)
        }
        return arr
    }

    choseFirstPlayer(){
        if(this.startingNrOfCoins() < 20){
            this.setState({activePlayer: 1, p1: true, p2: false})
            return 1
        } else {
            this.setState({activePlayer: 2, p1: false, p2: true})
            this.computerPlay();
            return 2
        }
    }

    changePlayerTurn(){
        if(this.state.p1 === true){
            this.setState({activePlayer: 2, p1:false, p2: true, coinsPerTurn: 0})
            this.computerPlay()
        } else {
            this.setState({activePlayer: 1, p1:true, p2: false, coinsPerTurn: 0})
        }
    }

    computerPlay(){
        const coinsLeft = this.state.coinsLeft.length;
        const nextL = function(coins){
            if((coins%4)===1){
                return coins
            } else{
                return nextL(coins-1)
            }
        }

        const coinId = this.state.coinsLeft.slice(0,1)

        const deltaToNextL = coinsLeft - nextL(coinsLeft);

        if(deltaToNextL===0){
            this.computerRemoveCoin()
            this.setState({activePlayer: 1, p1:true, p2: false})
            return
        } else{
            if(deltaToNextL>3){
                this.computerRemoveCoin()
                this.setState({activePlayer: 1, p1:true, p2: false})
                return
            } else{
                for(let i = 0; i<deltaToNextL; i++ ){
                    this.computerRemoveCoin()
                }
                this.setState({activePlayer: 1, p1:true, p2: false})
                return
            }
        }
    }

    computerRemoveCoin(){
        let coinsArr = this.state.coinsLeft;
        coinsArr.pop()
        this.setState({
            coinsLeft: coinsArr
        })
        if(coinsArr.length===1) this.setState({endOfGame: true})
    }

    removeCoin(id){
        let cpt = this.state.coinsPerTurn
        cpt++;
        const arr = this.state.coinsLeft;
        const i = arr.indexOf(id)
        arr.splice(i,1);

        if (cpt<4){
            this.setState({
                coinsLeft: arr,
                coinsPerTurn: cpt
            })
            // if game reached end state
            if (this.state.coinsLeft.length === 1){
                this.setState({endOfGame: true, activePlayer: 2, p1:false, p2: true})
            }
        }

        if(cpt===3) {
            if (this.state.coinsLeft.length === 1){
                this.setState({endOfGame: true, activePlayer: 2, p1:false, p2: true})
            } else{
                this.changePlayerTurn()
            }
        }
    }

    resetGame(){
        this.setState(
            {
                coinsLeft: [],
                activePlayer: null,
                p1: false,
                p2: false,
                coinsPerTurn: 0,
                endOfGame: false
            }
        )
    }

    render() {
        return (
            <div>
                <Title />
                <Head
                    coinsLeft={ this.state.coinsLeft }
                    p1={ this.state.p1 }
                    p2={ this.state.p2 } />
                <Board
                    coinsLeft={ this.state.coinsLeft }
                    handleClickCoin={coinId => this.removeCoin(coinId)}
                    endOfGame = {this.state.endOfGame}
                    alertWinner = {() => this.alertWinner}
                    activePlayer = {this.state.activePlayer} />
                <Controls
                    startGameHandle={ () => {
                        this.setState({
                            coinsLeft: this.coinsArr(this.startingNrOfCoins()),
                            // activePlayer: this.choseFirstPlayer(),
                            coinsPerTurn: 0,
                            endOfGame: false
                        })
                        this.choseFirstPlayer()
                    }}
                    changeTurnHandle={ () => this.changePlayerTurn() } />
            </div>
        );
    }
}
