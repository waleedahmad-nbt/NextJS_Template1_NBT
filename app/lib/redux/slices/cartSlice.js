const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        itemQuantity: (state, action) => {
            const item = state.items.find(item => item.id !== action.payload.id);
            if (item) {
                item.itemQuantity += 1
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id !== action.payload.id);
            if (item && item.itemQuantity > 1) {
                item.itemQuantity -= 1
            }
        },
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
    }
})

export const { addToCart, removeFromCart,itemQuantity,decrementQuantity } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;