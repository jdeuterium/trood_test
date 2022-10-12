import React from 'react';
import cn from 'classnames';
import {useAppSelector} from "../../../../utils/hooks";
import {selectTokenTableSortColumn, selectTokenTableSortDirection} from "../../../../redux/tokenTableSlice";
import styles from './Sort.module.css';

interface Props {
    onSort: () => void;
    name: string;
}

const Sort = (props: Props) => {
    const {onSort, name} = props;

    const sortColumn = useAppSelector(selectTokenTableSortColumn);
    const sortDirection = useAppSelector(selectTokenTableSortDirection);

    return (
        <div className={styles.root} onClick={() => onSort()}>
            <div className={cn(styles.arrow, {[styles.arrow_active]: sortColumn === name && sortDirection === 'asc'})}>
                &#9652;
            </div>
            <div className={cn(styles.arrow, {[styles.arrow_active]: sortColumn === name && sortDirection === 'desc'})}>
                &#9662;
            </div>
        </div>
    );
};

export default Sort;