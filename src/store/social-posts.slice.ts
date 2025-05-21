import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    socialPosts: [],
};

const socialPosts = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        fetchPosts: (state, action) => {
            state.socialPosts = action.payload },
    },
});

export const { fetchPosts } = socialPosts.actions;
export default socialPosts.reducer;