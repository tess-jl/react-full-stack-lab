import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import piList from '../../../assets/piList.js';

const Select = ({ onChange }) => {
  const Options = piList.map((option) => {
    return <Option key={ option.value } value={ option.value } name={ option.name } />;
  });

  return (
    <select onChange={ onChange }>{ Options }</select>
  );
};

Select.propTypes = {
  select: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

export default Select;
