import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        toggleSearchText(state, {payload}) {
            return payload
        }
    }
})

export const selectSearch = state => state.search

export const { toggleSearchText } = searchSlice.actions

export default searchSlice.reducer