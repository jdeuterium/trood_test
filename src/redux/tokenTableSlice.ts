import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../utils/store";

interface Interface {
    sortColumn: string;
    sortDirection: 'asc' | 'desc';
    filters: {status: string, type: string};
}

export const tokenTableSlice = createSlice({
    name: 'tokenTable',
    initialState: {
        sortColumn: '',
        sortDirection: 'desc',
        filters: {status: '', type: ''},
    } as Interface,
    reducers: {
        setSort: (state, action: PayloadAction<string>) => {
            const { sortColumn, sortDirection } = state;

            if (action.payload !== sortColumn) {
                state.sortColumn = action.payload;
                state.sortDirection = sortDirection;
            } else {
                state.sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
            }
        },
        setFilters: (state, action: PayloadAction<{field: string, value: string}>) => {
            const {field, value} = action.payload;

            state.filters = {
                ...state.filters,
                [field]: value,
            };
        },
    },
});

export const {setSort, setFilters} = tokenTableSlice.actions;

export const selectTokenTableSortColumn = (state: RootState) => state.tokenTable.sortColumn;
export const selectTokenTableSortDirection = (state: RootState) => state.tokenTable.sortDirection;
export const selectFilters = (state: RootState) => state.tokenTable.filters;

export default tokenTableSlice.reducer;