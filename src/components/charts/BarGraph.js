import { BarChart } from 'reaviz';
import React from 'react';


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

    
    return <BarChart
    
    height={300}
    width={300}
    data={displayData(props.categories, props.expenses)}
    />
    };
    
    export default BarGraph;