import './Update.css';
import "./Button.css";
import { getBudgetByMonth, getExpenseByMonth } from '../helpers/selectors';
import MyBudgetsForm from './MyBudgetsForm';
import ShowExpense from './ShowExpense'
import ShowMybudgets from './showMyBudgets';
export default function MyBudgets(props) {

  let myBudgets;
  const currentMonth = ((new Date()).getMonth()) + 1;

  //Show how much money are available after adding one expense in myBudgets table
  if (props.budgets) {
    const budgets = getBudgetByMonth(props.budgets, new Date().getFullYear(), currentMonth, props.userId);

    myBudgets = Object.keys(budgets).map((k) => {
      return (
        <ShowMybudgets name={k} budget={budgets[k][0]} available={budgets[k][1]} />
      );
    });
  }

  //Show how much money was spent after adding one expense in expenses table
  let myExpenses;
  if (props.expense && props.categories) {
    const expenses = getExpenseByMonth(props.expense, props.categories, currentMonth, props.userId);
   
    myExpenses = Object.keys(expenses).map((k) => {
      return (
        <ShowExpense name={k} amount={expenses[k]} />
      );
    });
  }

  return (
    <>
      <div className="my-budgets-form">
        <p>Enter your expenses</p>
        <div className="my-budgets-form-data">
          <MyBudgetsForm
            budgets={props.budgets}
            onAdd={props.onAdd}
            categories={props.categories}
            userId={props.userId} />
        </div>
        <br></br>
      </div>

      <div className="my-budgets-expenses">
        <p> {new Date().toLocaleString('default', { month: 'long' })} Expenses  </p>
        <div className="my-budgets-expenses-data">
          {myExpenses}
        </div>
      </div>

      <div className="my-budgets-budgets">
        <p> {new Date().toLocaleString('default', { month: 'long' })} Budgets  </p>
        <span className="budget-table">{"     "}</span>
        <span className="budget-table">   Budget</span>
        <span className="budget-table">   Remaining</span>
        <div className="my-budgets-budgets-data">
          {myBudgets}
        </div>
      </div>

    </>
  );
}