import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import { CardLink } from 'pages/Contacts/Contacts.style';

export const ContactsItem = ({ item: { name, number, id } }) => {
  return (
    <CardLink to={`/${id}`}>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>{name}</ListItemText>
      </ListItemButton>
    </CardLink>
  );
};
