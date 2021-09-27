import React from 'react';
import Button from './Button';
import './Update.css';

export default function Update () {

  return(
    <>
    <h2> Update </h2>
    <form>

    <Button>Add Category</Button> <input type='text'></input> <Button id = "add-category">&#43;</Button>
    <br>

    </br>
    <Button>Add Expense</Button> <input type='text'></input> <Button id = "add-amount">&#43;</Button>
    <br>

    </br>
    <Button>Save Changes</Button> <input type='text'></input>
    <br>
    
    </br>
    <Button>Delete Budget</Button> <input type='text'></input>
    </form>
    
 
  </>
  );
}