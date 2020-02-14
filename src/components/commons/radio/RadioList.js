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
  sessions: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    piNicknameId: PropTypes.string.isRequired,
    sensorType: PropTypes.array.isRequired,
    piLocationInHouse: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    notes: PropTypes.string,
    __v: PropTypes.number.isRequired
  })).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioList;
