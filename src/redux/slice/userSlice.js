import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Auth from '../../services/Auth';
import {setToken} from "../../utils/Auth";

export const signIn = createAsyncThunk(
    "user/signIn",
    async ({email, password, navigate}) => {
        try {
            let {data} = await Auth.signIn({email, password});
            setToken(data.token);
            navigate();
            return data.data
        }
        catch (e) {
            console.log('e', e)
        }
    }
);

const initialState = {
    user: {},
    status: null,
}

const usersSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [signIn.pending]: (state, action) => {
            console.log('pending')
            state.status = "loading";
        },
        [signIn.fulfilled]: (state, action) => {
            console.log('fulfilled')
            state.status = "success";
            state.user = action.payload;
        },
        [signIn.rejected]: (state, action) => {
            console.log('rejected')
            state.status = "failed";
        },
    },
});

export default usersSlice.reducer;
