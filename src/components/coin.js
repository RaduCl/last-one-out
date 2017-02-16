import React from 'react';

const coinId = x => `coin-nr-${x}`;

const computedStyles = (testDeleted, gameOver) =>
        `coin ${testDeleted ? 'deleted' : ''} ${gameOver ? 'last' : ''}`;

const Coin = ({ handleClickCoin, xPos, yPos, deleted, id, gameOver }) => {
    return (
        <img
            id={coinId(id)}
            key={id}
            onClick={e => { handleClickCoin(id); }}
            className={computedStyles(deleted, gameOver)}
            style={{ left: xPos, top: yPos }}
            src="../../img/small_coin.svg" alt="coin" />);
};

export default Coin;
