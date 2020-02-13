import React from 'react';
import PropTypes from 'prop-types';
import RadioItem from './RadioItem';

const RadioList = ({ sessions, name, onChange }) => {
  const radioButtonElements = sessions.map((session, i) => (
    <RadioItem key={session._id} label={`session ${i + 1}` } value={session._id} name={name} onChange={onChange} />
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
