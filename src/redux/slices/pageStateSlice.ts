import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNotFoundPage: false,
};

const pageStateSlice = createSlice({
  name: 'pageState',
  initialState,
  reducers: {
    setIsNotFoundPage: (state, action) => {
      state.isNotFoundPage = action.payload;
    },
  },
});

export const { setIsNotFoundPage } = pageStateSlice.actions;
export default pageStateSlice.reducer;
