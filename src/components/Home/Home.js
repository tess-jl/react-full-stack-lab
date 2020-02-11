import React from 'react';
import DataSessionDetails from './DataSessionDetails/DataSessionDetails.js';
import PiList from './PiList/PiList.js';
import styles from './Home.css';

export default function Home() {

  return (
    <main className={styles.Home}>
      <PiList />
      <DataSessionDetails />
    </main>
  );
}
