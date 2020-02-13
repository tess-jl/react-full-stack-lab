import React from 'react';
import PropTypes from 'prop-types';
import SelectItem from './SelectItem';
import styles from './Select.css';

const SelectList = ({ onChange, piList }) => {
  const options = piList.map(pi => {
    return <SelectItem key={pi._id} value={pi.piNickname} name={pi.piNickname} />;
  });

  return (
    <select className={styles.SelectList} onChange={onChange}>
      {options}
    </select>
  );
};

SelectList.propTypes = {
  select: PropTypes.array,
  piList: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

export default SelectList;
