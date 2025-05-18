import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    socialPosts: [],
};

const socialPosts = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        updatePokemonList: (state, action) => {
            state.socialPosts = action.payload },
    },
});

export const { updatePokemonList } = socialPosts.actions;
export default socialPosts.reducer;