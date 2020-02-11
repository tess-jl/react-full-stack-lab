import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as d3 from 'd3';
import { line } from 'd3';


const Details = () => {

  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const dataSessionId = useParams('dataSessionId');
    getDataPoints(dataSessionId)
      .then(currentPoints => {
        setDataPoints(currentPoints);
      });
  }, [dataPoints]);

  const getDataPoints = (dataSessionId) => {
    fetch(`/api/v1/pi-data-points/${dataSessionId}`)
      .then(resArrayOfData => {
        return resArrayOfData.reduce((accDataPoints, currDataPoint) => {
          let i = 0;
          const sensors = Object.keys(currDataPoint.data);
          while(i < sensors.length){
            const pointBySensor = {
              sensor: sensors[i],
              value : currDataPoint.data[sensors[i]].averageValue,
              STD: currDataPoint.data[sensors[i]].standardDeviation,
              timeStamp: currDataPoint.piTimestamp
            };
            i++;
            accDataPoints.push(pointBySensor);
          }
          return accDataPoints.sort(function(a, b){
            if(a.timeStamp < b.timeStamp) return -1;
            if(a.timeStamp > b.timeStamp) return 1;
            if(a.timeStamp === b.timeStamp) return 0;
          });
        }, []);
      });
  };


  const dataListItems = dataPoints.map(...dataArrayObject => {
    (
      <>
        <li>{dataArrayObject.value}</li>
        <li>{dataArrayObject.STD}</li>
        <li>{dataArrayObject.timeStamp}</li>
      </>
    );
  });
  
  return (
    <ul>
      {dataListItems}
    </ul>
  );


  //   const line = d3.line();
  //   line
  //     .x(dataPoints.map(...dataArrayObject => dataArrayObject.date))
  //     .y(dataPoints.map(...dataArrayObject => dataArrayObject.value));

};
export default Details;
