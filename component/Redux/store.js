import { configureStore } from '@reduxjs/toolkit'
import combineReducers from "./combineReducer";



const store = configureStore({
    reducer: combineReducers
})

export default store;