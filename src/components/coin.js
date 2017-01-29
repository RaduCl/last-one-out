import React from 'react';

const coinId = x => `coin-nr-${x}`;

const computedStyles = (testDeleted, endOfGame) =>
        `coin ${testDeleted ? 'deleted' : ''} ${endOfGame ? 'last' : ''}`;

const Coin = ({ handleClickCoin, xPos, yPos, deleted, id, endOfGame }) => {
    return (<img
        id={coinId(id)}
        key={id}
        onClick={e => { handleClickCoin(id); }}
        className={computedStyles(deleted, endOfGame)}
        style={{ left: xPos, top: yPos }}
        src="../../img/small_coin.svg" alt="coin"
    />);
};
export default Coin;
