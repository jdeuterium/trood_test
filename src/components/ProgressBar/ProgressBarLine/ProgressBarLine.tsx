import React from 'react';
import ProgressBarItem from "./ProgressBarItem";
import {ProgressBarItemModel} from "../../../models/ProgressBarItemModel";
import styles from "./ProgressBarLine.module.css";

interface Props {
    items: ProgressBarItemModel[];
    height: number;
    width: number;
    total: number;
}

const ProgressBarLine = (props: Props) => {
    const {items, height, width, total} = props;

    const sections = items.reduce((acc: ProgressBarItemModel[], current) => {
        const count = Math.round(current.value * 60 / total);

        Array.from(Array(count)).forEach(_ => {
            acc.push(current);
        });

        return acc;
    }, []);

    return (
        <div className={styles.progressbar_line} style={{height, width}}>
            {sections.map((item, index) => <ProgressBarItem key={index} data={item} />)}
        </div>
    );
};

export default ProgressBarLine;