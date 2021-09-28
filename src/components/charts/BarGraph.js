import { BarChart } from 'reaviz';
import React from 'react';


  const categoryChart = () => (
    <BarChart
    
    height={300}
    width={300}
    data={[
      { key:"{props.categories}", data: "{props.expenses}"},
      { key: 'Category2', data: 500 },
      { key: 'Category3', data: 250}
    ]}
    />
    );
    
    export default categoryChart;