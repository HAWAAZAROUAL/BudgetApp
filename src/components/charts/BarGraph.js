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
    // [
      // { key:"${props.categories}", data: "${props.expenses}"},
      // { key: props.categories[1].category_type, data: props.categories[1].amount },
    //   { key: 'Category3', data: 250}
    // ]