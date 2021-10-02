import Button from './Button'
import { getBudgetId  } from '../helpers/selectors';
import React, { useState } from 'react'
export default function MyBudgetsForm(props) {
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
     
   
    function onSave() {
       
     if(props.budgets){

     
      const budgetId=getBudgetId(category,props.budgets);
     
     const today = new Date();
     const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
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
    
    function reset() {
      setCategory('')
      setAmount( 0)
    }

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

);}
