import React from 'react';
import styles from "./Circle.module.css";

interface Props {
    color: string;
}

const Circle = ({color}: Props) => {
    return (
        <div className={styles.circle} style={{background: color}} />
    );
};

export default Circle;