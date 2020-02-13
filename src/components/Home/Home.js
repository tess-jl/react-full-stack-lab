import React, { useState } from 'react';
import DataSessionDetails from './DataSessionDetails/DataSessionDetails.js';
import PiList from './PiList/PiList.js';
import styles from './Home.css';


export default function Home() {
  
  const [selectedSession, setSelectedSession] = useState();

  const handleSessionSelect = (({ target }) => {
    console.log(target.value);
    setSelectedSession(target.value);
  });
  
  return (
    <main className={styles.Home}>
      <PiList handleSessionSelect={handleSessionSelect} />
      <DataSessionDetails selectedSession={selectedSession}/>
    </main>
  );
}
