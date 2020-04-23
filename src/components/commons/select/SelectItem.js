import React from 'react';
import PropTypes from 'prop-types';

const SelectItem = ({ value, name }) => {
  return (
    <option value={ value }>{ name }</option>
  );
};

SelectItem.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default SelectItem;
