import { AreaChart } from 'reaviz'
import React from 'react'
import './Pie.css'

const IncomeTime = (props) => {
  const displayData = function (incomes) {
    if (incomes) {
      return Object.keys(incomes).map((expenseId) => {
        // console.log('PROPS',(incomes[expenseId]));
        return {
          key: new Date(incomes[expenseId].date),
          data: incomes[expenseId].income,
        }
      })
    }
  }
  return (
    <div className="income-time">
      <AreaChart
        
        height={300}
        width={380}
        data={displayData(props.incomes)}
      />
    </div>
  )
}

export default IncomeTime
