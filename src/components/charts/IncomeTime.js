import { AreaChart } from 'reaviz';
import React from 'react';
import './Pie.css'

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
  className="income-time"
    height={300}
    width={450}
    data={displayData(props.incomes)}
  />
  };

export default IncomeTime;