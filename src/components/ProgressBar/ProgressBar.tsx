import React from 'react';
import ProgressBarLegend from "./ProgressBarLegend";
import ProgressBarLine from "./ProgressBarLine";
import {ProgressBarItemModel} from "../../models/ProgressBarItemModel";
import styles from './ProgressBar.module.css';

interface Props {
    items: ProgressBarItemModel[];
    width: number;
    height: number;
}

const ProgressBar = (props: Props) => {
    const {items, width, height} = props;

    const filteredData = items.filter(item => item.value);
    const total = filteredData.reduce((acc, current) => acc += current.value, 0);

    return (
        <div className={styles.progressbar} style={{width}}>
            <ProgressBarLine items={filteredData} total={total} width={width} height={height} />
            <ProgressBarLegend items={filteredData} total={total} />
        </div>
    );
};

export default ProgressBar;