 
import Button from './Button'
import React, { useState } from "react";
export default function Account() {
  function clickMe() {
    alert('clicked!')
  }
  const [income, setIncome] = useState(0);
  const [income_type, setIncome_type] = useState( "");
  return (
    <div class="account">
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
      <Button id="add-income"> Add</Button>
       
      </body>

    </div>
  )
}
