import './Update.css';
import "./Button.css";
import {   getBudgetByMonth,getExpenseByMonth } from '../helpers/selectors';
import MyBudgetsForm from './MyBudgetsForm';
import ShowExpense from './ShowExpense'
import ShowMybudgets from './showMyBudgets';
export default function MyBudgets (props) {
  
 let myBudgets;
  const currentMonth=((new Date()).getMonth())+1;
  //Show how much money are available after adding one expense in myBudgets table
  if(props.budgets){
    const budgets   = getBudgetByMonth(props.budgets,new Date().getFullYear(), currentMonth ,props.userId) ; 
  
    myBudgets=   Object.keys(budgets).map((k)=>{
    return (
     <ShowMybudgets name={k} budget={budgets[k][0]}  available={budgets[k][1]}/>
    );
  });  
  }
   
  //Show how much money was spent after adding one expense in expenses table
  let myExpenses;
   if(props.expense && props.categories){
  const expenses   = getExpenseByMonth(props.expense, props.categories, currentMonth ,props.userId) ; 
   console.log("&&&&",expenses);
   myExpenses=   Object.keys(expenses).map((k)=>{
    return (
     <ShowExpense name={k}  amount={expenses[k]}/>
    );
  });
}
  

  return(
    <>
     <h3> {new Date().toLocaleString('default', { month: 'long' })} Expenses  </h3>
    {myExpenses}
    <MyBudgetsForm 
    budgets={props.budgets} 
    onAdd={props.onAdd} 
    categories={props.categories}
    userId={props.userId}/>
    
    <div>
        <span className="budget-table">{"     "}</span>
        <span className="budget-table">Budget</span>
        <span className="budget-table">Available</span>
      </div>
      <h3> {new Date().toLocaleString('default', { month: 'long' })} Budgets  </h3>
      {myBudgets}
      
  </>
  );
}