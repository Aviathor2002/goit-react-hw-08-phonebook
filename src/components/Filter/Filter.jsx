import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import React from 'react';

import { Input, Label } from './Filter.style';
import { getFilter } from 'components/redux/filter';

export const Filter = ({ onChange }) => {
  const contactFilter = useSelector(getFilter);
  return (
    <Label>
      Find contacts by name:
      <Input type="text" value={contactFilter} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
