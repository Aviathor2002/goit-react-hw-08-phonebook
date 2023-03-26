import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

const getContact = createAsyncThunk('contacts/getcontact', async () => {
  try {
    const { data } = await axios.get('/contacts');

    return data;
  } catch (error) {}
});

const addContact = createAsyncThunk('contacts/addcontact', async newcontact => {
  const { data } = await axios.post('/contacts', newcontact);

  return data;
});

const deleteContact = createAsyncThunk(
  'contacts/deletecontact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);

    return contactId;
  }
);

export const filter = createAction('contacts/filter');

export const contactsOperations = {
  getContact: getContact,
  addContact: addContact,
  deleteContact: deleteContact,
  filter: filter,
};
