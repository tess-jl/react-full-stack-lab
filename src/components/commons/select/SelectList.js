import React from 'react';
import PropTypes from 'prop-types';
import SelectItem from './SelectItem';
import styles from './Select.css';

const SelectList = ({ onChange, piList }) => {
  const Options = piList.map((option) => {
    return <SelectItem key={ option.value } value={ option.value } name={ option.name } />;
  });

  return (
    <select className={ styles.SelectList } onChange={ onChange }>{ Options }</select>
  );
};

SelectList.propTypes = {
  select: PropTypes.array,
  piList: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

export default SelectList;
