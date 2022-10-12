import React from 'react';
import {Circle} from '../../../../components';
import {ProgressBarLegendItemModel} from "../../../../models/ProgressBarLegendItemModel";
import styles from './LegendItem.module.css';

interface Props {
    data: ProgressBarLegendItemModel;
}

const LegendItem = ({data}: Props) => {
    return (
        <div className={styles.root}>
            <Circle color={data.color}/>
            <div className={styles.label}>{data.name}: {data.value} ({data.percentage}%)</div>
        </div>
    );
};

export default LegendItem;