import React from 'react';
import LegendItem from "./LegendItem";
import {ProgressBarItemModel} from "../../../models/ProgressBarItemModel";
import styles from "./ProgressBarLegend.module.css";

interface Props {
    items: (ProgressBarItemModel)[];
    total: number;
}

const ProgressBarLegend = (props: Props) => {
    const {items, total} = props;

    return (
        <div className={styles.legends}>
            {items.map((item, index) =>
                <LegendItem
                    key={index}
                    data={{
                        ...item,
                        percentage: +(item.value * 100 / total).toFixed(1)
                    }}
                />)}
        </div>
    );
};

export default ProgressBarLegend;