import React from 'react'

const NewGameButton = ({startGameHandle}) => {
    return(
        <div
            onClick = {() => startGameHandle()}
            className="button new-game controls-item">
            New Game
        </div>
    )
}

export default NewGameButton;