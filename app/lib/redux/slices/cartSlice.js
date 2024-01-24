const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    favorites: [],
    selectedProductDetails: null,
  },
  reducers: {
    increment: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    addToCart: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 };
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(newItem);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
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
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setProductDetails: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setBlogDetails: (state, action) => {
      state.selectedBlog = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increment,
  decrement,
  addToFavorites,
  removeFromFavorites,
  setProductDetails,
  setBlogDetails,
  setComputersTabletsDetails,
  setTvAudioDetails,
  setWatchDetails,
  setHeadphonesDetails,
  setPowerToolsDetails,
  setTvBoxDetails,
  setCellPhoneDetails,
  setElectronicsDetails,
} = cartSlice.actions;

export const selectSearch = (state) => state.search;

export const cartReducer = cartSlice.reducer;
