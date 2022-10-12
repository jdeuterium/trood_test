import React from 'react';
import Sort from "../Sort";
import Filter from '../Filter';
import {TokenTableHeaderCellModel} from "../../../../models/TokenTableHeaderCellModel";
import {useAppSelector} from "../../../../utils/hooks";
import {selectFilters} from "../../../../redux/tokenTableSlice";
import styles from './TokenTableHeaderCell.module.css';

interface Props {
    statuses: string[];
    data: TokenTableHeaderCellModel;
    onSort: (field: string) => void;
    onFilter: (field: string, value: string) => void;
}

const TokenTableHeaderCell = (props: Props) => {
    const {statuses, onSort, onFilter, data} = props;

    const filters = useAppSelector(selectFilters);

    const handleSort = () => onSort(data.name);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        onFilter(event.target.name, event.target.value);

    return (
        <th>
            <div className={styles.cell}>
                {data.canFiltered
                    ? <Filter selected={
                        (data.name === 'Project' ? filters.status : '') || (data.name === 'Token type' ? filters.type : '')
                    }>
                        {data.name === 'Project'
                            ? <select
                                name='status'
                                onChange={handleChange}
                                value={filters.status}
                                className={styles.filter_element}>
                                <option value="">All</option>
                                {statuses.map((item, index) => <option key={index} value={item}>{item}</option>)}
                            </select>
                            : null}
                        {data.name === 'Token type'
                            ? <input
                                type="text"
                                name='type'
                                onChange={handleChange}
                                value={filters.type}
                                className={styles.filter_element} />
                            : null}
                        </Filter>
                    : null}
                {data.name}
                {data.canSorted
                    ? <Sort onSort={handleSort} name={data.name} />
                    : null}
            </div>
        </th>
    );
};

export default TokenTableHeaderCell;