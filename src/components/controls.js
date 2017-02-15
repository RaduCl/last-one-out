import React from 'react'
import { Component } from 'react'
import NewGameButton from './new_game_button.js'

const Controls = ({startGameHandle, changeTurnHandle}) => {
    return(
        <div className="controls">
            <NewGameButton startGameHandle={startGameHandle} />
            <div
                onClick={changeTurnHandle}
                className="button end-turn controls-item" >
                End Turn
            </div>
        </div>
    )
}

export default Controls;
