import React from 'react';
import DataSessionDetails from './DataSessionDetails/DataSessionDetails.js';
import PiList from './PiList/PiList.js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Home.css';

export default function Home() {

  return (
    <main className={ styles.Home }>
      <Header />
      <PiList />
      <DataSessionDetails />
      <Footer />
    </main>
  );
}
