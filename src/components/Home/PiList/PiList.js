import React, { useState, useEffect } from 'react';
import SelectList from '../../commons/select/SelectList';
import RadioList from '../../commons/radio/RadioList';
import styles from './PiList.css';
import PropTypes from 'prop-types';
import { useSessionUser } from '../../../hooks/auth.js';
import { get } from '../../../services/request.js';

export default function PiList({ handleSessionSelect }) {
  const user = useSessionUser();

  if(!user){
    return <h1>Loading</h1>;
  } 

  const [selectedPi, setSelectedPi] = useState(user.myPis[0]);
  // const [radio, setRadio] = useState('pi2');
  const [sessions, setSessions] = useState([]);

  
  useEffect(() => {
    fetchSessions();
  }, [selectedPi]);

  const fetchSessions = () => {
    get(`/user-aggregations/nickname/${selectedPi.piNickname}&${user._id}`)
      .then(sessions => {
        console.log('fetched sessions', sessions);
        setSessions(sessions);
      });
  };

  //fetchSessions();

  const inputFactoryMethod = {
    select: setSelectedPi,
    radio: setSessions
  };

  // const radios = [
  //   { label: 'Session 1', value: 'session1' },
  //   { label: 'Session 2', value: 'session2' },
  //   { label: 'Session 3', value: 'session3' }
  // ];

  const handlePiChange = ({ target }) => {
    inputFactoryMethod[target.name](target.value);
  };

  return (
    <aside className={styles.PiList}>
      <SelectList name="select" piList={user.myPis} onChange={handlePiChange} />
      <RadioList sessions={sessions} name="radio" onChange={handleSessionSelect} />
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
