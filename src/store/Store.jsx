import { configureStore } from "@reduxjs/toolkit"
import photoReducer from './features/Photos/PhotosSlice'
import cardReducer from './features/Card/CardSlice'
import searchReducer from './features/Search/SearchSlice'
import userDataReducer from "./features/UserData/UserData"

const store = configureStore({
    reducer:{
        photo:photoReducer,
        card: cardReducer,
        search: searchReducer,
        userData: userDataReducer,
    }
})


export default store