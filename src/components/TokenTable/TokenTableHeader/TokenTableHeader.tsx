import React from 'react';
import TokenTableHeaderCell from './TokenTableHeaderCell';
import {TokenTableHeaderCellModel} from "../../../models/TokenTableHeaderCellModel";

interface Props {
    statuses: string[];
    onSort: (field: string) => void;
    onFilter: (field: string, value: string) => void;
}

const TokenTableHeader = (props: Props) => {
    const {statuses, onSort, onFilter} = props;

    const headerItems: TokenTableHeaderCellModel[] = [
        {
            name: 'Project',
            canSorted: true,
            canFiltered: true,
        },
        {
            name: 'Token type',
            canFiltered: true,
        },
        {
            name: 'Conditions',
        },
        {
            name: 'Volume',
            canSorted: true,
        },
        {
            name: 'ROI',
        },
        {
            name: 'Free float',
        },
        {
            name: 'Insurance hedge',
        },
        {
            name: '',
        },
    ];

    return (
        <thead>
            <tr>
                {headerItems.map((item, index) =>
                    <TokenTableHeaderCell
                        key={index}
                        statuses={statuses}
                        onSort={onSort}
                        onFilter={onFilter}
                        data={item} />)}
            </tr>
        </thead>
    );
};

export default TokenTableHeader;