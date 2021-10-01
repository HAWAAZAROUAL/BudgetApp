// TODO: REPLACE BUDGET NAME WITH THE CREATED BUDGET NAMES
// ADD ALL THE CREATED BUDGETS TO THE MY BUDGETS PAGE



import React from 'react';
import Button from './Button';
import './Update.css';
import "./Button.css";
// import budgets from '../../budget_api/src/routes/budgets';

export default function MyBudgets () {
  // const displayData = function(categories, expenses) {
  //   if () {
  //     return Object.keys(expenses).map((expenseId) => {
  //       return {
  //         key: categories[expenses[expenseId].category_id].category_type,
  //         data: expenses[expenseId].amount
  //       }
  //     })
  //   }
  // }
  return(
    <>
    <form>
   <h3> Budget Name </h3>
    <p>Add Category</p> <input type='text'></input> <Button id = "add-category">Add</Button>
    <br>

    </br>
    <p>Add Expense</p> <input type='text'></input> <Button id = "add-amount">Add</Button>
    <br>

    </br>
    <Button>Save Changes</Button> 
    <br>
    
    </br>
    <Button>Delete Budget</Button> 
    </form>
    
 
  </>
  );
}