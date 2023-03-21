import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { TextField } from '@mui/material';
import { Label } from './Filter.style';
import { getFilter, setFilter } from 'redux/filter';

export const Filter = () => {
  const dispatch = useDispatch();
  const contactFilter = useSelector(getFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      <TextField
        fullWidth
        label="Find contacts by name"
        id="Number"
        type="text"
        value={contactFilter}
        onChange={changeFilter}
        sx={{ width: '100%' }}
      />
    </Label>
  );
};
