import { BarChart } from 'reaviz';
import React from 'react';
import './Pie.css'

  const BarGraph = (props) => {
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

    
    return <>
    <div >
      <BarChart
    
    className="bar-expense"
    height={300}
    width={450}
    data={displayData(props.categories, props.expenses)}
    />
    </div>
    
    </>
    };
    
    export default BarGraph;