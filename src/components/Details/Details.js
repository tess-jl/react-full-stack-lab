import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const dataSessionId = useParams('dataSessionId');
    getDataPoints(dataSessionId)
      .then(currentPoints => {
        setDataPoints(...currentPoints);
      });
  }, [dataPoints]);

  const getDataPoints = (dataSessionId) => {
    fetch(`/api/v1/pi-data-points/${dataSessionId}`)
      .then(resArrayOfData => {
        let i = 0;
        return resArrayOfData.map(dataPoint => {
          const sensors = Object.keys(dataPoint.data);
          while(i < sensors.length){
            const pointBySensor = {
              sensor: sensors[i],
              value : dataPoint.data[sensors[i]].averageValue,
              STD: dataPoint.data[sensors[i]].standardDeviation,
              date: dataPoint.piTimestamp
            };
            i++;
            return pointBySensor;
          }
        });
      });
  };

  const dataListItems = dataPoints.map(...dataArrayObject => {
    (
      <>
        <li>{dataArrayObject.value}</li>
        <li>{dataArrayObject.STD}</li>
        <li>{dataArrayObject.date}</li>
      </>
    );
  });
  
  return (
    <ul>
      {dataListItems}
    </ul>
  );
};
export default Details;
