import React from 'react';
import {ProgressBarItemModel} from "../../../../models/ProgressBarItemModel";
import styles from './ProgressBarItem.module.css';

interface Props {
    data: ProgressBarItemModel;
}

const ProgressBarItem = ({data}: Props) => {
    return (
        <div className={styles.root} style={{background: data.color}} />
    );
};

export default ProgressBarItem;