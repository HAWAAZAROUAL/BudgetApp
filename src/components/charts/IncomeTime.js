import { AreaChart } from 'reaviz';
import React from 'react';
import './Pie.css'

const IncomeTime = (props) => {
  console.log('AAAA', props.incomes)
//   const data = [ {
//     "id": 8,
//     "data": 3000,
//     "income_type": "salary",
//     "key": new Date("2021-08-30T00:00:00.000Z"),
//     "user_id": 2
// }, 
//   {
//     "id": 5,
//     "data": 2000,
//     "income_type": "salary",
//     "key": new Date("2021-05-30T00:00:00.000Z"),
//     "user_id": 2
// }
// ]
  const displayData = function(incomes) {
    
    const data2 = Object.keys(incomes).map((expenseId, id) => {
      return {
        key: new Date(incomes[expenseId].date),
        data: incomes[expenseId].income
      }
    })
    const filteredData = data2.filter((expenseId, id) => {
      if (id < 10) {
        return expenseId;
      }
    })

  return filteredData;
    // if (Object.keys(incomes).length > 0) {
    //   return Object.keys(incomes).map((expenseId) => {
    //     // console.log('PROPS',(incomes[expenseId]));
    //     return {
    //       key: new Date(incomes[expenseId].date),
    //       data: incomes[expenseId].income
    //     }
    //   })
    // }
    // return []
    
  }
  const data = displayData(props.incomes);

  // console.log('check', data);
  return (
  <>
  
  <AreaChart
  className="income-time"
    height={300}
    width={440}
    // data={displayData(props.incomes)}
    data={data}
  />
  </>
  )
  };

export default IncomeTime;