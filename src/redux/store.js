import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './ordersSlice';
export const store = configureStore({
    reducer: {

        orders: ordersReducer
    },
})



/* import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
export const store = configureStore({
reducer: {
tasks: tasksReducer
}, */