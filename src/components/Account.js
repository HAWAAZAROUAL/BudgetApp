import Button from './Button'
 
import React, { useState } from 'react'
import { getincomeByMonth } from '../helpers/selectors'
import '../Home.css'

export default function Account(props) {
  const [income, setIncome] = useState(0)
  const [income_type, setIncome_type] = useState('')

  function onAdd() {
    const incomes = {
      income: Number(income),
      income_type: income_type,
    }
    props.onAdd(props.userId, incomes).then(() => {
    })
  }
const currentMonth=new Date().getMonth()+1;
const monthIncome = getincomeByMonth(props.income,currentMonth,props.userId);
console.log("mont..",monthIncome);
 const data = Object.keys(monthIncome).map(key=>{
     return(
       <tr><td>{key}</td><td>---{monthIncome[key]}</td></tr>
      ); 
   });
 
   

  return (
    <>
   
      <div id="account">
      <div>
         <table>
            <tr><td>{new Date().getMonth()+1}</td><td></td></tr>
             {data}
            </table>
      </div>
        <p> Add Income </p>
        <form autoComplete="off">
          <input className="income-input"
            name="income"
            value={income}
            type="text"
            placeholder="Enter income amount"
            onChange={(event) => setIncome(event.target.value)}
          />
          <input className="income-input"
            name="income_type"
            value={income_type}
            type="text"
            placeholder="Enter income type"
            onChange={(event) => setIncome_type(event.target.value)}
          />
          
        </form>
        <div>
          <Button id="add-income" onClick={() => onAdd()}>
            {' '}
            Add
          </Button>
          
        </div>
        
      </div>
      
    </>
  )
}
