 
 import Button from './Button'
 import { BubbleChart } from 'reaviz';
import React, { useState } from "react";
import { getincomeByMonth  } from '../helpers/selectors';
export default function Account(props) {
   
  const [income, setIncome] = useState(0);
  const [income_type, setIncome_type] = useState("");
     
  function onAdd() {
    const incomes= {
      income: Number(income),
     income_type:income_type
    };
    props.onAdd(props.userId, incomes)
    .then(()=>{});
  }
  console.log("props.income",props);
  const monthIncome = getincomeByMonth(props.income,9,props.userId);
  const keys=Object.keys(monthIncome);
      
  
  return (
    <>
  
    <div className="account">
      <body>
      <p> Add Income </p>
      <form autoComplete="off">
          <input name="income"
            value={income}
            type="text"
            placeholder="Enter income amount"
            onChange={event => setIncome(event.target.value)}
          />
          <input
            name="income_type"
            value={income_type}
            type="text"
            placeholder="Enter income type"
            onChange={event => setIncome_type(event.target.value)}
          />
        </form>
      <Button id="add-income" onClick={()=>onAdd()}> Add</Button>
       
      </body>

    </div>
    
 </>
 
  
 
  )
}