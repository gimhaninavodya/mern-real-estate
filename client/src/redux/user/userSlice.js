import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state) => {
            state.loading = true;
        },
        signInSuccess:(state,action) => {
            state.error = action.payload;
            state.loading = false;
        },
        signInFailure:(state, action) => {
            state.action = action.payload;
            state.loading =false;
        }
    }
})

export const {signInStart,signInSuccess,signInFailure} = userSlice.actions;

export default userSlice.reducer;