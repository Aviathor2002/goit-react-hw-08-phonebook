import { ContactsItem } from './ContactsItem';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const ContactsList = ({ list }) => {
  return (
    <Grid
      item
      xs={20}
      md={6}
      sx={{ marginBottom: 10, marginTop: 8, width: '300px' }}
    >
      <Demo>
        <List>
          {list.map(item => (
            <ContactsItem key={item.id} item={item} />
          ))}
        </List>
      </Demo>
    </Grid>
  );
};

//   return (
//     <ul>
//
//     </ul>
//   );
