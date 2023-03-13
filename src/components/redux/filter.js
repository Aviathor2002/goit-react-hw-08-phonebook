import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filterContacts',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
