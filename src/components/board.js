import React from 'react'
import { Component } from 'react'
import Coin from './coin.js'

class Board extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // const self = this
        if(this.props.endOfGame===true){
            this.props.alertWinner()
        }
        alert('The winner is: ')
        // setTimeout(self.render(), 500)
    }

    coins(){
        return this.props.coinsLeft.map(coin => <Coin
            key={coin} id={coin}
            handleClickCoin={this.props.handleClickCoin}
            endOfGame={this.props.endOfGame} />)
    }

    congratulation(){
        if(this.props.activePlayer === 1){
            return 'Computer is the Winner !'
        } else {
            return 'Player 1 is the Winner !'
        }
    }

    winnerAlert(){
        return(
            <div className="alert-winner button">
                {this.congratulation()}
            </div>
            )
    }

    render(){
        return(
            <div className="game-board">
                {this.coins()}
                { this.props.endOfGame ? this.winnerAlert() : null }
            </div>
            )
    }
}

export default Board
