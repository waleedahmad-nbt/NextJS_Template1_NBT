import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./slices/cartSlice";
import { timerReducer } from "./slices/timerSlice";

const persistConfig = {
  key: "root",
  storage,
  items:[],
  favorites:[],
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedTimerReducer = persistReducer(persistConfig, timerReducer);

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    timer: persistedTimerReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
