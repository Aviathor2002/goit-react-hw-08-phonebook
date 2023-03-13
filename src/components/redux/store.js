import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts';
import { filterSlice } from './filter';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    contacts: contactsSlice.reducer,
  },
});
