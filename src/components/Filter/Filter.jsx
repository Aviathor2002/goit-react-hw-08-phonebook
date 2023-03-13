import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import React from 'react';

import { Input, Label } from './Filter.style';

export const Filter = ({ onChange }) => {
  const filter = useSelector(state => state.filter);
  return (
    <Label>
      Find contacts by name:
      <Input type="text" value={filter} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
