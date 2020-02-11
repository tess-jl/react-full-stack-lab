import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.css';

const RadioItem = ({ name, label, value, onChange }) => (
  <div className={styles.RadioItem}>
    <input id={value} type="radio" name={name} value={value} onChange={onChange} />
    <label htmlFor={value}>{label}</label>
  </div>
);

RadioItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioItem;
