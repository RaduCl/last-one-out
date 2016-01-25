import React from 'react'
// import { Component } from 'react'

const Coin = ({handleClickCoin, key, id, endOfGame}) => {

    const handleCl = (e) => {
        handleClickCoin(id)
    }

    const coin = () => {
        return(
            <img
            id = {coinId(id)}
            onClick={handleCl}
            className="coin"
            src="../../img/small_coin.svg" alt="coin"/>
        )
    }

    const lastCoin = () => {
        return(
            <img
            id = {coinId(id)}
            style = {{cursor: 'not-allowed'}}
            className="coin"
            src="../../img/small_coin.svg" alt="coin" />
        )
    }
    const coinId = (id) => "coin-nr-" + id;

    return(
        (endOfGame===true) ? lastCoin() : coin()
    )

}

export default Coin