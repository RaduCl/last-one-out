import React from 'react';

const Header = ({ coinsLeft, activePlayer, p1, p2, gameOverDispatch }) => {
    const p1ClassName = `button player-active-${activePlayer === 1 || false}`;
    const p2ClassName = `button player-active-${activePlayer === 2 || false}`;
    //TODO this is not proper refactor 
    if(coinsLeft === 1) {
        console.log('coinsLeft === 1');
        gameOverDispatch();
    }
    return (
        <div className="header">
            <div className={p1ClassName} >{p1}</div>
            <div className="button player-name" >Coins {coinsLeft || null}</div>
            <div className={p2ClassName} >{p2}</div>
        </div>
    );
};

export default Header;
