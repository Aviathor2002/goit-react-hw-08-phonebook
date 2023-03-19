import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { Input, Label } from './Filter.style';
import { getFilter, setFilter } from 'redux/filter';

export const Filter = () => {
  const dispatch = useDispatch();
  const contactFilter = useSelector(getFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name:
      <Input type="text" value={contactFilter} onChange={changeFilter} />
    </Label>
  );
};
