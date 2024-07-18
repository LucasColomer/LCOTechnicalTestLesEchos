import { createSlice } from "@reduxjs/toolkit";
import { User } from "./User";
import { USER_WITH_ONE_SUBSCRIPTION } from "./MockUsers";


interface UserState {
    user: User;
}

const initialState: UserState = {
    user: USER_WITH_ONE_SUBSCRIPTION,
};

const userState = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    selectors: {
        getSubscriptions: (state) => state.user.subscriptions,
    },
    
})

export const { setUser } = userState.actions;
export const { getSubscriptions } = userState.selectors;

export default userState.reducer;