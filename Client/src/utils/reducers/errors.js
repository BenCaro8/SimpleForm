import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'ERRORS',
  initialState: {},
  reducers: {
    setError: (state, { payload }) => {
      state[payload.fieldName] = payload.error;
      return state;
    },
    removeError: (state, { payload }) => {
      state[payload] = null;
    },
  },
});

export const { setError, removeError } = slice.actions;

export const selectErrors = (state) => state.ERRORS;

export default slice.reducer;
