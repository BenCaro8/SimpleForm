import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'SINGLESELECT',
  initialState: null,
  reducers: {
    setSelected: (state, { payload }) => {
      state = payload;
      return state;
    },
    removeSelected: (state, _) => {
      state = null;
      return state;
    },
  },
});

export const { setSelected, removeSelected } = slice.actions;

export const getSelected = (state) => state.SINGLESELECT;

export default slice.reducer;
