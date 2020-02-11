describe('it should return an array in the right shape given data in the shape we will recieve from the db', () => {
  it('should work', () => {
    const dataPoints = [{
      data: { 
        light: {
          averageValue: 10, 
          standardDeviation: 2
        },
        temp: {
          averageValue: 12, 
          standardDeviation: 5
        }
      },
      piTimestamp: '1/1/2000'
    },
    {
      data: { 
        light: {
          averageValue: 11, 
          standardDeviation: 3
        }
      },
      piTimestamp: '1/1/1001'
    },
    {
      data: { 
        light: {
          averageValue: 15, 
          standardDeviation: 1
        }
      },
      piTimestamp: '1/1/1002'
    }];
    
    const reduceArrIntoApropriateObjects = (arr) => {
      const reducedArr = arr.reduce((accDataPoints, currDataPoint) => {
        let i = 0;
        const sensors = Object.keys(currDataPoint.data);
        while(i < sensors.length){
          let pointBySensor = {
            sensor: sensors[i],
            value : currDataPoint.data[sensors[i]].averageValue,
            STD: currDataPoint.data[sensors[i]].standardDeviation,
            timeStamp: currDataPoint.piTimestamp
          };
          accDataPoints.push(pointBySensor);
          i++;
        }
        return accDataPoints;
      }, []);
      return reducedArr.sort(function(a, b){
        if(a.timeStamp < b.timeStamp) return -1;
        if(a.timeStamp > b.timeStamp) return 1;
        if(a.timeStamp === b.timeStamp) return 0;
      });
    };
    let reducedArr = reduceArrIntoApropriateObjects(dataPoints);
    expect(reducedArr).toEqual([
      { 'STD': 3, 'sensor': 'light', 'timeStamp': '1/1/1001', 'value': 11 },
      { 'STD': 1, 'sensor': 'light', 'timeStamp': '1/1/1002', 'value': 15 },
      { 'STD': 2, 'sensor': 'light', 'timeStamp': '1/1/2000', 'value': 10 },
      { 'STD': 5, 'sensor': 'temp', 'timeStamp': '1/1/2000', 'value': 12 }]);
  });
});
