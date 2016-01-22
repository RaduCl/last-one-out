import React from 'react'
import { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="button player-name" >Player One</div>
                <div className="button player-name" >Left Coins 20</div>
                <div className="button player-name" >Player Two</div>
            </div>
        )
    }
}