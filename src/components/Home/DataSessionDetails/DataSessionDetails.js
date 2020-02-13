import React from 'react';

export default function DataSessionDetails(selectedSession) {
  return (
    <>
      <h2>Session Details</h2>
      <div>
        <p>Pi Nickname: {'Placeholder Pi'}</p>
        <p>Sensor Types: {'Sensor Placeholder'}</p>
        <p>Location: {'Placeholder Room'}</p>
        <p>City: {'Placeholderville'}</p>
        <p>Number of Data Points: {'Placeholder * pi'}</p>
        <button>Data Details for this session</button>
      </div>
    </>
  );
}
