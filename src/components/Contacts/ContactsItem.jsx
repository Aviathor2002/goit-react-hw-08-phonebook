import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { CardLink } from 'pages/Contacts/Contacts.style';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
export const ContactsItem = ({ item: { name, id } }) => {
  return (
    <CardLink to={`/${id}`}>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleSharpIcon fontSize="large" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText color="black">{name}</ListItemText>
      </ListItemButton>
    </CardLink>
  );
};
