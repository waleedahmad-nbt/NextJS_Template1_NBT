const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1
            }
        },
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        addToFavorites: (state, action) => {
            const product = action.payload;

            if (!state.favorites) {
                state.favorites = [];
            }

            if (!state.favorites.find((item) => item.id === product.id)) {
                state.favorites.push(product);
            }
        },

        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
        },
    }
})

export const { addToCart, removeFromCart, increment, decrement, addToFavorites, removeFromFavorites } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;