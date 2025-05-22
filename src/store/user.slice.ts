import { createSlice } from '@reduxjs/toolkit';
import {User} from "../shared/type/commonTypes.ts";

const initialState = {
    user: {},
};

const UserDetails = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload },
    },
});

export const { updateUser } = UserDetails.actions;
export default UserDetails.reducer;