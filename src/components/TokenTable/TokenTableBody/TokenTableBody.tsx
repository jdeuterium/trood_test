import React from 'react';
import TokenTableRow from "./TokenTableRow";
import {TokenTableItemModel} from "../../../models/TokenTableItemModel";

interface Props {
    items: TokenTableItemModel[]
}

const TokenTableBody = ({items}: Props) => {
    return (
        <tbody>
        {items.map(item => <TokenTableRow key={item.id} data={item} />)}
        </tbody>
    );
};

export default TokenTableBody;