import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Auth from '../../services/Auth';
import {setToken} from "../../utils/Auth";

export const signIn = createAsyncThunk(
    "user/signIn",
    async ({email, password, navigate}) => {
        console.log("USER SIGN IN ASYNC FUNC CALL")
        try {
            let { data : { data }} = await Auth.signIn({email, password});
            console.log("data.token",data);
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
            console.log('fulfilled', action.payload)
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
