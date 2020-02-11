import React from 'react';
import PropTypes from 'prop-types';
import RadioItem from './RadioItem';

const RadioList = ({ radioButtons, name, onChange }) => {
  const radioButtonElements = radioButtons.map(({ label, value }) => (
    <RadioItem key={value} label={label} value={value} name={name} onChange={onChange} />
  ));
  
  return (
    <>
      {radioButtonElements}
    </>
  );
};

RadioList.propTypes = {
  radioButtons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioList;
