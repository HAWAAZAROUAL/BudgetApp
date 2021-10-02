 
import Button from './Button';
import './Update.css';
import "./Button.css";
import React, { useState } from 'react'
import { getBudgetId,getBudgetByMonth } from '../helpers/selectors';
// import budgets from '../../budget_api/src/routes/budgets';

export default function MyBudgets (props) {
   console.log( "!!!!",props);
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)
   
 
  function onSave() {
     
    const budgetId=getBudgetId(category,props.budgets);
   
 
   const today = new Date();
   const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const expense = {
      date:  date,
      available: props.budgets[budgetId]["amount"]-amount,
      amount: amount,  
      category_id: props.budgets[budgetId]["category_id"]
    }
      props
        .onAdd(props.userId, expense)

        .then((res) => {
          reset()
        })
    }
  
  function reset() {
    setCategory('')
    setAmount( 0)
  }
  const currentMonth=((new Date()).getMonth())+1;
  
  const budgets   = getBudgetByMonth(props.budgets,2021, currentMonth ,props.userId) ; 
  console.log("======",budgets);
  const myBudgets=   Object.keys(budgets).map((k)=>{
    return (
      <div>
      <p> -------Budget---Available</p>
       <p>{k} ---{budgets[k][0]} ---{budgets[k][1]}</p>
      </div>
    );
  }
  

  );   
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
      {myBudgets}
  </>
  );
}