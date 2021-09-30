import { PieChart } from 'reaviz';
import React from 'react';
import './Pie.css'

const Pie = (props) => {

  const displayData = function(categories, expenses) {
    if (expenses) {
      return Object.keys(expenses).map((expenseId) => {
        return {
          key: categories[expenses[expenseId].category_id].category_type,
          data: expenses[expenseId].amount
        }
      })
    }
  }
  return <PieChart
    height={300}
    width={450}
    data= {displayData(props.categories, props.expenses)}
  />
};

export default Pie;

// So now we need to return 2 keys with 2 separate sets of data
// One key for income and one key for expenses