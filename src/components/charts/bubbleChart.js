import { BarChart } from 'reaviz';
import React from 'react';
import { BubbleChart } from 'reaviz';

  const showIncome =   (props) => {
    const displayData = function(incomes,userId) {
    const currentIncome =  getincomeByMonth(incomes,9,userId)
      if (incomes) {
        return Object.keys(currentIncome).map((type) => {
          return {
            key: type,
            data: currentIncome[type]; 
          }
        })
      }
    }

    
    return 
  <BubbleChart
    height={300}
    width={300}
    data={ displayData(props.incomes,props.userId)}
  />
);
    
    export default showIncome;