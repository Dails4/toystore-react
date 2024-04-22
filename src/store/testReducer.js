import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cartValue: 0,
};

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        increaseCartValue(state, action){
            state.cartValue += action.payload;
        } 
    },
});

export const testActions = testSlice.actions;
export const selectCartValue = (state) => state.test.cartValue;

export default testSlice.reducer;