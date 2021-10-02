import './Update.css';
import "./Button.css";
import {   getBudgetByMonth } from '../helpers/selectors';
import MyBudgetsForm from './MyBudgetsForm';
import ShowExpense from './ShowExpense'
export default function MyBudgets (props) {
  
 
  const currentMonth=((new Date()).getMonth())+1;
  
  const budgets   = getBudgetByMonth(props.budgets,new Date().getFullYear(), currentMonth ,props.userId) ; 
  
  const myBudgets=   Object.keys(budgets).map((k)=>{
    return (
     <ShowExpense name={k} budget={budgets[k][0]}  available={budgets[k][1]}/>
    );
  }
  
  );   
  return(
    <>
    <MyBudgetsForm 
    budgets={props.budgets} 
    onAdd={props.onAdd} 
    bugets={props.budgets}
    userId={props.userId}/>
    
    <div>
        <span className="budget-table">{"     "}</span>
        <span className="budget-table">Budget</span>
        <span className="budget-table">Available</span>
      </div>
      {myBudgets}
  </>
  );
}