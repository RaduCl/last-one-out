import React from 'react'
import { Component } from 'react'

export default class Header extends Component {
    startingCoins(){
        return Math.floor(Math.random()*20 + 20)
    }

    render() {
        return (
            <div className="header">
                <div className="button player-name" >Player One</div>
                <div className="button player-name" >Coins {this.startingCoins()}</div>
                <div className="button player-name" >Player Two</div>
            </div>
        )
    }
}