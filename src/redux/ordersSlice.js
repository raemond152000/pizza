import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    list: [],
}
export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrders: (state, action) => {
            state.list = action.payload
        },
        addOrder: (state, action) => {
            const newOrder = action.payload;
            const updatedOrder = [
                ...state.list,
                newOrder
            ];
            state.list = updatedOrder;
        },
       
        removeOrder: (state, action) => {
            const id = action.payload;
            let updatedOrder = state.list.filter(
                (order) => order.id !== id
            );
            state.list = updatedOrder;
        },
        clearOrder: (state, action) => {
            
            state.list = [];
        },
    },
})
// Action creators are generated for each case reducer function
export const { setOrders, addOrder, removeOrder, clearOrder
} = ordersSlice.actions;
export default ordersSlice.reducer;