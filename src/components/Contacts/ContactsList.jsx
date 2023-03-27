import { ContactsItem } from './ContactsItem';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations } from 'redux/contacts/contactsOperatoins';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const ContactsList = ({ list }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContact());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.contacts);
  const filterWord = useSelector(state => state.contacts.filter);

  const gettedContacts = contacts;

  const getFilteredContacts = () => {
    const normalizedFilter = filterWord.toLowerCase();

    return gettedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Grid
      item
      xs={20}
      md={6}
      sx={{ marginBottom: 10, marginTop: 8, width: '500px' }}
    >
      <Demo>
        <List>
          {contacts &&
            getFilteredContacts().map(contact => (
              <ContactsItem key={contact.id} item={contact} />
            ))}
        </List>
      </Demo>
    </Grid>
  );
};
