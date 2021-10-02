 
import Button from './Button';
import './Update.css';
import "./Button.css";
import React, { useState } from 'react'
// import budgets from '../../budget_api/src/routes/budgets';

export default function MyBudgets (props) {
   
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)
   
  function onSave() {
    const expense = {
      category: category,
      amount: amount,  
    }
      props
        .onSave(props.userId, expense)

        .then((res) => {
          reset()
        })
    }
  
  function reset() {
    setCategory('')
    setAmount( 0)
  }
  const currentMonth=((new Date()).getMonth())+1;
  
  return(
    <>
    <div className="input-form">
     <form autoComplete="off">
   {<h3>   </h3> }
   
    <p>Add Category</p>
          <input
            name="category"
            value={category}
            type="text"
             
            onChange={(event) => setCategory(event.target.value)}
          /> 
          <br></br>
          <p>Add Expense</p> 
          <input
            name="amount"
            value={amount}
            type="text"
             
            onChange={(event) => setAmount(event.target.value)}
          />
        </form>
        </div>
        <div className="input-btns">
        <Button confirm onClick={(event) => onSave()}>
          {' '}
          Save Change{' '}
        </Button>
      </div>
  </>
  );
}