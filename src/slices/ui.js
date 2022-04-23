import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: '',
    loading: false
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload.message;
        },
        clearError: (state) => {
            state.error = '';
        },
        toggleLoader: (state) => {
            state.loading = !state.loading;
        }
    }
});

export const { setError, clearError, toggleLoader } = uiSlice.actions;

export default uiSlice.reducer;