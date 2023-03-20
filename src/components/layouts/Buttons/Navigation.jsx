import * as React from 'react';
import { PersonIcon, PersonAddIcon } from '@mui/icons-material';
import { Item, Link, List } from './Navigation.styled';

export const Navigation = () => {
  return (
    <List>
      <Item>
        <Link
          to={'/'}
          style={({ isActive }) => {
            if (isActive) return { color: 'purple' };
          }}
        >
          <PersonIcon />
        </Link>
      </Item>
      <Item>
        <Link
          to={'/addContact'}
          style={({ isActive }) => {
            if (isActive) return { color: 'purple' };
          }}
        >
          <PersonAddIcon />
        </Link>
      </Item>
    </List>
  );
};
