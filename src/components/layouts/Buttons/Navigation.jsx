import * as React from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import { Item, Link, List, Section } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Section>
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
    </Section>
  );
};
