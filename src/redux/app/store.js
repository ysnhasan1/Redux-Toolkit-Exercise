import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counterReducer: counterSlice // Diğer sayfalarda "counterReducer" olarak kullanacağız.
    },
})
