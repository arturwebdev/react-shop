import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        data: [],
        count: 0,
        price: 0
    },
    reducers: {
        deleteCardItem(state, {payload}){
            return {
                ...state,
                count: state.count - payload.count,
                price: state.price - payload.price,
                data: [
                    ...state.data.filter(el => el.id !== payload.id)
                ]
            }
        },
        dicCount(state, {payload}){
            return payload.count > 1 ? (
            {
                ...state,
                count: state.count - 1,
                price: state.price - payload.price / payload.count,
                data: [
                    ...state.data.map(el => {
                        if (el.id === payload.id) {
                            return {
                                ...el,
                                count: el.count - 1,
                                price: el.price - el.price / el.count
                            }
                        }
                        return el
                    })
                ]
            }) : state
            
        },
        incCount(state, {payload}){
            return {
                ...state,
                count: state.count + 1,
                price: state.price + payload.price/payload.count,
                data: [
                        ...state.data.map(el => {
                            if (el.id === payload.id) {
                                return {
                                    ...el,
                                    count: el.count + 1,
                                    price: el.price + el.price / el.count
                                }
                            }
                            return el
                        })
                    ]
            }
        },
        addToCard(state, {payload}) {
            return {
                ...state,
                count: state.count + 1,
                price: state.price + payload.price,
                data: state.data.some(el => el.id === payload.id) ? 
                [
                    ...state.data.map(el => {
                        if (el.id === payload.id) {
                            return {
                                ...el,
                                count: el.count + 1,
                                price: el.price + el.price/el.count
                            }
                        }
                        return el
                    })
                ] 
                : 
                [
                    ...state.data, 
                    {
                        ...payload,
                        count: 1
                    }
                ]
            }
        }
    }
})

export const selectCard = state => state.card

export const { addToCard, incCount, dicCount, deleteCardItem } = cardSlice.actions

export default cardSlice.reducer