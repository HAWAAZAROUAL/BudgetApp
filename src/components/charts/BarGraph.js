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
    <style>

--color-background: rgb(255, 127, 80);
--color-on-background:#fff;

--color-tooltip: rgba(0,5,11,0.9);
--color-on-tooltip: #fff;

--color-handle: #67c2e4;
--color-handle-drag: #2c343a;

</style>
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