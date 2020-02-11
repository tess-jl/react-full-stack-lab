import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ value, name }) => {
  return (
    <option value={ value }>{ name }</option>
  );
};

Option.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Option;
