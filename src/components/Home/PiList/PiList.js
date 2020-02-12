import React, { useState, useEffect } from 'react';
import SelectList from '../../commons/select/SelectList';
import RadioList from '../../commons/radio/RadioList';
import styles from './PiList.css';
import PropTypes from 'prop-types';
import { useSessionUser } from '../../../hooks/auth.js';

export default function PiList() {
  const user = useSessionUser();
  const [select, setSelect] = useState([]);
  const [radio, setRadio] = useState('pi2');

  if(!user){
    return <h1>Loading</h1>;
  } 


  const inputFactoryMethod = {
    select: setSelect,
    radio: setRadio
  };

  const radios = [
    { label: 'Session 1', value: 'session1' },
    { label: 'Session 2', value: 'session2' },
    { label: 'Session 3', value: 'session3' }
  ];

  // const piList = [
  //   { name: 'Pi 1', value: 'pi1' },
  //   { name: 'Pi 2', value: 'pi2' },
  //   { name: 'Pi 3', value: 'pi3' }
  // ];

  const handleChange = ({ target }) => {
    inputFactoryMethod[target.name](target.value);
  };

  return (
    <aside className={styles.PiList}>
      <SelectList name="pis" piList={user.myPis} onChange={handleChange} />
      <RadioList radioButtons={radios} name="sessions" onChange={handleChange} />
    </aside>
  );
}

PiList.propTypes = {
  user: PropTypes.shape({
    __v: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    myPis: PropTypes.array.isRequired,
    role: PropTypes.string.isRequired
  }).isRequired
};
