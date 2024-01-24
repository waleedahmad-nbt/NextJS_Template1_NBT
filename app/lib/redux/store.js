import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./slices/cartSlice";

const persistConfig = {
  key: "root",
  storage,
  items:[],
  favorites:[],
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
