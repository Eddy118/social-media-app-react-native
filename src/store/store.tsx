import { configureStore } from '@reduxjs/toolkit';
import socialPostsReducer from './social-posts.slice';
import UserDetailsReducer from './user.slice'

export const store = configureStore({
    reducer: {
        socials: socialPostsReducer,
        userDetails : UserDetailsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;