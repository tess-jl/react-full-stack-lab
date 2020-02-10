import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';

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
