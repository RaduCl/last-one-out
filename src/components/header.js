import React from 'react'
// import { Component } from 'react'

const Header = ({coinsLeft, p1, p2}) => {
    const p1ClassName = "button player-active-" + p1
    const p2ClassName = "button player-active-" + p2

    return (
        <div className="header">
            <div className={p1ClassName} >Player One</div>
            <div className="button player-name" >Coins {coinsLeft.length || null}</div>
            <div className={p2ClassName} >Computer</div>
        </div>
    )
}

export default Header