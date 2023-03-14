import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    add(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    remove(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { add, remove } = contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;

const persistConfig = {
  key: 'contact',
  storage,
};

export const contactsReducers = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
