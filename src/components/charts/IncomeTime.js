import { AreaChart } from 'reaviz';
import React from 'react';

const IncomeTime = (props) => (
  <AreaChart
    height={300}
    width={300}
    data={[
      { key: new Date('11/29/2019'), data: 5 },
      { key: new Date('11/30/2019'), data: 20 },
      { key: new Date('12/1/2019'), data: 30 },
    ]}
  />
);

export default IncomeTime;