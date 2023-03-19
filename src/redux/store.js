import { configureStore } from '@reduxjs/toolkit';
// import { contactsSlice } from './contacts';
import { filterSlice } from './filter';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './contacts';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
