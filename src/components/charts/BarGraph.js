import { BarChart } from 'reaviz';
import React from 'react';
import './Pie.css';
// import './Home.css';

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
    <div className="bar-expense">
      <BarChart
    
    
    height={300}
    width={450}
    data={displayData(props.categories, props.expenses)}
    />
    </div>
    
    </>
    };
    
    export default BarGraph;