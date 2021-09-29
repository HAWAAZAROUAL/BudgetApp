import React from 'react';
// import { RadialGauge } from 'reaviz';
import { LinearGauge } from 'reaviz';

// const LeftOver = (props) => (
//   <RadialGauge
//     height={300}
//     width={300}
//     data={[{ key: 'Budget Left', data: 100}]}
//   />
// );


const LeftOver = () => (
  <LinearGauge
    height={300}
    width={300}
    data={{ key: 'Budget Left', data: 50 }}
  />
);
export default LeftOver;