import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const loadPhotos=createAsyncThunk(
    'photo/loadPhotos',
    async function (){
        const responce=await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        const data =responce.data
        const changingdate=data.map( el => {
            el.discription=el.title
            el.title=el.title.slice(0,el.title.indexOf(' '))
            // el.price=Math.random() * (100000 - 10000) + 10000
            el.price= Math.floor(Math.random() * (1000 - 100) + 100) * 100
            return el
            })

        return changingdate
        }
)

export const photoSlice=createSlice({
    name:'photo',
    // initialState:[],
    initialState:{
        loading:false,
        err:false,
        data:[]
    },
    reducers: {
        deleteItem(state, {payload}) {
            return {
                ...state,
                data: state.data.filter(el => el.id !== payload)
            }
        },
        addItem(state, {payload}){
            return {
                ...state,
                data: [
                    {
                        id: new Date().getTime().toString(),
                        ...payload
                    },
                    ...state.data
                ]
            }
        },
        editItem(state, {payload}){
            return {
                ...state, 
                data: state.data.map(el => {
                    if (el.id === payload.id) {
                        console.log({
                            ...el,
                            title: payload.title ? payload.title : el.title,
                            price: payload.price ? payload.price : el.price,
                            discription: payload.discription ? payload.discription : el.discription,
                            url: payload.url ? payload.url : el.url
                        });
                        return {
                            ...el,
                            title: payload.title ? payload.title : el.title,
                            price: payload.price ? payload.price : el.price,
                            discription: payload.discription ? payload.discription : el.discription,
                            url: payload.url ? payload.url : el.url
                        }
                    }
                    return el
                })
            }
        }
    },
    extraReducers:{
        [loadPhotos.pending]:(state)=>{
            console.log("chanpin em");
            return {
                ...state,
                err:false,
                loading:true
            }
        },
        [loadPhotos.fulfilled]:(state,{payload})=>
        {
            console.log(payload);
            console.log("tex em hasel");
        return {
            err:false,
            loading:false,
            data:payload
        }
        },
        [loadPhotos.rejected]:(state)=>{
            return {
                ...state,
                err:true,
                loading:true
            }
        }
    }
})

export default photoSlice.reducer

export const { deleteItem, addItem, editItem } = photoSlice.actions

export const SelectPhotos = (state) => state.photo

