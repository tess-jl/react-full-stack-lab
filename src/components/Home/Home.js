import React from 'react';
import DataSessionDetails from './DataSessionDetails/DataSessionDetails.js';
import PiList from './PiList/PiList.js';


export default function Home() {

  
  return (
    <>
      <p>This is the Home Page</p>
      <p>It needs Header, Footer Pi/Session List, and Session details</p>
      <PiList />
      <DataSessionDetails />
    </>
  );
}
