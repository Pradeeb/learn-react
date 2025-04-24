import {configureStore} from '@reduxjs/toolkit'
import  customerReducer from './slices/customerSlice'

 const Store = configureStore(
    {
        devTools:true,
        reducer:{
            customers:customerReducer
        }
    }
)
export default Store