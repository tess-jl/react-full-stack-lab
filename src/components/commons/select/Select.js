import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import styles from './Select.css';

const Select = ({ onChange, piList }) => {
  const Options = piList.map((option) => {
    return <Option key={ option.value } value={ option.value } name={ option.name } />;
  });

  return (
    <select className={ styles.Select } onChange={ onChange }>{ Options }</select>
  );
};

Select.propTypes = {
  select: PropTypes.array,
  piList: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

export default Select;
