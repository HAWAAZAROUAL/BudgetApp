 
 import Button from './Button'
import React, { useState } from "react";
export default function Account(props) {
   
 const [income, setIncome] = useState(0);
  const [income_type, setIncome_type] = useState( "");
   function onAdd() {
    const incomes= {
      income: income,
     income_type:income_type
    };
    props.onAdd(props.userId, incomes)
  }
  return (
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
  )
}