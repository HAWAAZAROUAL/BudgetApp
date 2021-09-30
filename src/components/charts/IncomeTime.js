import { AreaChart } from 'reaviz';
import React from 'react';

const IncomeTime = (props) => {
  const displayData = function(incomes) {
    if (incomes) {
      return Object.keys(incomes).map((expenseId) => {
        // console.log('PROPS',(incomes[expenseId]));
        return {
          key: new Date(incomes[expenseId].date),
          data: incomes[expenseId].income
        }
      })
    }
  }
  return <AreaChart
    height={300}
    width={500}
    data={displayData(props.incomes)}
  />
  };

export default IncomeTime;