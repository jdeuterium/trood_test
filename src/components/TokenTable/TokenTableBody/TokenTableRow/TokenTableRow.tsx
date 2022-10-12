import React from 'react';
import cn from "classnames";
import {Circle} from "../../../../components";
import TokenTableButton from "./TokenTableButton";
import {TokenTableItemModel} from "../../../../models/TokenTableItemModel";
import {numberWithSpaces} from "../../../../utils/NumberUtils";
import styles from './TokenTableRow.module.css';

interface Props {
    data: TokenTableItemModel;
}

const TokenTableRow = ({data}: Props) => {
    const handleOnBuy = () => console.log('id', data.id);

    return (
        <tr>
            <td className={cn(styles.cell, styles[data.status])}>
                <div className={styles.project_name}>
                    <Circle color={data.status} />
                    {data.name}
                </div>
            </td>
            <td className={cn(styles.cell, styles[data.status])}>{data.type}</td>
            <td className={cn(styles.cell, styles[data.status])}>{data.conditions}</td>
            <td className={cn(styles.cell, styles[data.status])}>$ {numberWithSpaces(data.volume)}</td>
            <td className={cn(styles.cell, styles[data.status])}>{data.roi} %</td>
            <td className={cn(styles.cell, styles[data.status])}>{data.free}</td>
            <td className={cn(styles.cell, styles[data.status])}>{data.hedge} %</td>
            <td className={cn(styles.cell, styles[data.status])}>
                <TokenTableButton onBuy={handleOnBuy} />
            </td>
        </tr>
    );
};

export default TokenTableRow;