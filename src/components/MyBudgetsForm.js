import Button from './Button'
import { getBudgetId } from '../helpers/selectors';
import React, { useState } from 'react';
import DropdownMenu from './dropdown';
export default function MyBudgetsForm(props) {
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)


  function onSave() {
      
    if(props.budgets){
      
      
      const budgetId=getBudgetId(category,props.budgets);
      console.log('BUDGET AMOUNT', budgetId);
   
   const today = new Date();
   const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   if(props.budgets[budgetId]){
    if(props.budgets[budgetId]["amount"]){
      const newAmount=props.budgets[budgetId]["amount"];
      const expense = {
        budgetId:budgetId,
        date:  date,
        available: newAmount-amount,
        amount: amount,  
        category_id: props.budgets[budgetId]["category_id"]
      }
    
    props
          .onAdd(props.userId, expense)
  
          .then((res) => {
            reset()
          })
        }
      }
    }
   }
   

  function reset() {
    setCategory('')
    setAmount(0)
  }
  function getValue(e){
    setCategory(e)
  }

  return (
    <>
    <DropdownMenu getValue={getValue} categories={props.categories}/>
      <div className="input-form">
        <form autoComplete="off">
        <h6>You selected {category}</h6>
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
