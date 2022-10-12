import React from 'react';
import TokenTableHeader from "./TokenTableHeader";
import TokenTableBody from "./TokenTableBody";
import {TokenTableItemModel} from "../../models/TokenTableItemModel";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {
    selectFilters,
    selectTokenTableSortColumn,
    selectTokenTableSortDirection,
    setFilters,
    setSort
} from "../../redux/tokenTableSlice";
import styles from './TokenTable.module.css';

interface Props {
    items: TokenTableItemModel[]
}

const TokenTable = ({items}: Props) => {
    const dispatch = useAppDispatch();
    const sortColumn = useAppSelector(selectTokenTableSortColumn);
    const sortDirection = useAppSelector(selectTokenTableSortDirection);
    const filters = useAppSelector(selectFilters);

    const handleSort = (field: string) => dispatch(setSort(field));
    const handleFilter = (field: string, value: string) => dispatch(setFilters({field, value}));

    const prepareData = items
        .filter(item => {
            return (!filters.status || filters.status === item.status) &&
                (!filters.type || item.type.toLowerCase().includes(filters.type.toLowerCase()));
        })
        .sort((a, b) => {
        let valueA: string | number | null = null;
        let valueB: string | number | null = null;

        switch (sortColumn) {
            case 'Project':
                valueA = a.name;
                valueB = b.name;
                break;
            case 'Volume':
                valueA = a.volume;
                valueB = b.volume;
                break;
        }

        if (valueA && valueB) {
            return sortDirection === 'asc'
                ? valueA < valueB
                    ? 1
                    : -1
                : valueA > valueB
                    ? 1
                    : -1;
        } else {
            return 0;
        }
    });

    const statuses = items.reduce((acc: string[], current) => {
        if (!acc.includes(current.status)) {
            acc.push(current.status);
        }

        return acc;
    }, []);

    return (
        <table className={styles.table}>
            <TokenTableHeader
                statuses={statuses}
                onSort={handleSort}
                onFilter={handleFilter} />
            <TokenTableBody items={prepareData} />
        </table>
    );
};

export default TokenTable;