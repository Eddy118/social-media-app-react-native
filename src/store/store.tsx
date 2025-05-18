import { configureStore } from '@reduxjs/toolkit';
import socialPostsReducer from '../store/social-posts.slice';

export const store = configureStore({
    reducer: {
        pokemon: socialPostsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;