import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    playerInfo: localStorage.getItem('playerInfo') 
    ? JSON.parse(localStorage.getItem('playerInfo')) 
    : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.playerInfo = action.payload;
            localStorage.setItem('playerInfo', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.playerInfo = null;
            localStorage.removeItem('playerInfo');
        }
    }
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
