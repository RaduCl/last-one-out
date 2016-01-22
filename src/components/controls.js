import React from 'react'
import { Component } from 'react'

export default class Controls extends Component {
    render(){
        return(
            <div className="controls">
                <div className="button end-turn controls-item" >End Turn</div>
                <div className="button new-game controls-item" >New Game</div>
                <div className="button controls-item" >Player One Wins!</div>
            </div>
        )
    }
}