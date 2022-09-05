import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const loadUser=createAsyncThunk(
    'userData/loadUser',
    async function (){
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = responce.data
        console.log(data);
        const addData = data.map( el => ({
                id: el.id,
                name: el.name,
                email: el.email,
                password: el.website.slice(0, el.website.indexOf('.'))
            }))

        console.log(addData);
        return addData
        }
)

const UserData = createSlice({
    name: "userData",
    // initialState: "Armen",
    initialState: {
        data: [],
        correntUser: null
    },
    reducers: {
        addUser(state, {payload}){
            console.log(payload)
            return {
            ...state,
            data: [
                ...state.data, 
                { 
                    ...payload,
                    id: new Date().getTime().toString()
                }
            ]}
        }
    },
    extraReducers: {
        [loadUser.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                data: [...state.data, ...payload]
            }
        }
    }

})




export const {addUser} = UserData.actions

export const data = state => state.userData

export default  UserData.reducer