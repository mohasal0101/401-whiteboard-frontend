//create a redux slice for signin

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const signinSlice = createSlice({
    name: "signin",
    initialState,
    reducers: {
        signinStart: (state) => {
            state.loading = true;
        }
        ,signinSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        }
        ,signinFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { signinStart, signinSuccess, signinFailure } = signinSlice.actions;

export default signinSlice.reducer;



