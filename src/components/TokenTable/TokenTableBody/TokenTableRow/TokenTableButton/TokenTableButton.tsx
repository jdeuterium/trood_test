import React from 'react';
import styles from './TokenTableButton.module.css';

interface Props {
    onBuy: () => void;
}

const TokenTableButton = ({onBuy}: Props) => {
    return (
        <button className={styles.button} onClick={onBuy}>Buy</button>
    );
};

export default TokenTableButton;