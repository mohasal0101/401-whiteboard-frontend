// create a post slicer 

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: "idle",
    error: null,
};


export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        }
    }
});

export const { addPost } = postSlice.actions;

export default postSlice.reducer;

// Path: src\redux\store.js