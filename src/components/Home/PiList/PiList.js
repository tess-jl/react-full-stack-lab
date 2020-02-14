import React, { useState, useEffect } from 'react';
import SelectList from '../../commons/select/SelectList';
import RadioList from '../../commons/radio/RadioList';
import styles from './PiList.css';
import PropTypes from 'prop-types';
import { useSessionUser } from '../../../hooks/auth.js';
import { get } from '../../../services/request.js';

export default function PiList({ handleSessionSelect }) {
  const user = useSessionUser();
  
  const [selectedPiIndex, setSelectedPiIndex] = useState(0);
  const [sessions, setSessions] = useState([]);
    
  useEffect(() => {
    if(user){
      fetchSessions();
    }
  }, [selectedPiIndex, user]);

  if(!user){
    return <h1>Loading</h1>;
  } 

  const fetchSessions = () => {
    get(`/user-aggregations/nickname/${user.myPis[selectedPiIndex].piNickname}&${user._id}`)
      .then(sessions => {
        console.log('fetched sessions', sessions);
        setSessions(sessions);
      });
  };

  const handlePiChange = ({ target }) => {
    setSelectedPiIndex(target.key);
    console.log(target.key);
  };

  return (
    <aside className={styles.PiList}>
      <SelectList name="select" piList={user.myPis} onChange={handlePiChange} />
      <RadioList sessions={sessions} name="radio" onChange={handleSessionSelect} />
    </aside>
  );
}

PiList.propTypes = {
  handleSessionSelect: PropTypes.func.isRequired
};
