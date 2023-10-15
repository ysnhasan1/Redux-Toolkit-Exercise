import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        decrement: (state) => {
            state.counter -= 1
        },

        increment: (state) => {
            state.counter += 1
        },

        customIncrement: (state, action) => {
            state.counter += action.payload;
        },

        customDecrement: (state, action) => {
            state.counter -= action.payload;
        }
    }
})

export const { decrement, increment, customIncrement, customDecrement } = counterSlice.actions;

export default counterSlice.reducer;