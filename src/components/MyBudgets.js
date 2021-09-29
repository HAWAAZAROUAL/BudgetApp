import React from 'react';
import Button from './Button';
import './Update.css';
import "./Button.css";

export default function MyBudgets () {

  return(
    <>
    <form>

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