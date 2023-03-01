import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    loading: false,
    currentUser: {},
    error: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

const authReducer = authSlice.reducer;
export default authReducer;
