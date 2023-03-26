import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
// import { CardLink } from 'pages/Contacts/Contacts.style';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts/contactsOperatoins';
export const ContactsItem = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    // <CardLink to={`/${id}`}>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <AccountCircleSharpIcon fontSize="large" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        sx={{
          color: 'black',
        }}
      >
        {name}: {number}
      </ListItemText>
      <button
        onClick={() => {
          dispatch(contactsOperations.deleteContact(id));
        }}
      >
        Delete contact
      </button>
    </ListItem>
    // </CardLink>
  );
};
