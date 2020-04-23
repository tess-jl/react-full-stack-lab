import React from 'react';
import PropTypes from 'prop-types';

const SelectItem = ({ url, label }) => {
  return (
    <li><a href={url}>{label}</a></li>
  );
};

SelectItem.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default SelectItem;
