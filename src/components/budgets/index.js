import useApplicatonData from '../../hooks/useApplicationData';

import { getBudgetByUserID,getBudgetByMonth,getExpenseByMonth } from '../../helpers/selectors';
import BudgetShow from './Budget_Show'
import Form from './Form';
import './style.css'
export default function CreateBudget() {
  const {
    state,
    createBudget,
    updateBudget,
    deleteBudget
  } = useApplicatonData();

  const monthBudget= getBudgetByMonth(state.budgets,2021,10,2);
  const monthExpense=getExpenseByMonth(state.expenses,state.categories,10,2);
  console.log("expense",monthExpense,"budgets",monthBudget);
  


  const userBudget = getBudgetByUserID(state.budgets, state.userId)
  const budgets = userBudget.map((budget) => {
    let startDate;
    let endDate;
    if (budget.start_date && budget.end_date) {
      startDate = budget.start_date.split('T')[0];
      endDate = budget.end_date.split('T')[0];
    }

    return (
      <BudgetShow
        id={budget.id}
        budgetName={budget.name}
        budgetLimit={budget.budget_limit}
        startDate={startDate}
        endDate={endDate}
        createBudget={createBudget}
        deleteBudget={deleteBudget}
        updateBudget={updateBudget}
        userid={budget.user_id}
      />
    );
  });
  return (
    <>
    <div className="new-budget">
      <div className="title-boxes">Create new budget</div>
      <div>
     <Form
             onSave={createBudget} 
             userId={state.userId} 
             
             />
             </div>
             </div>
    <div className="app">
      <p className="title-boxes">Your Budgets</p>
      
      {/* <table border="1" frame="void" rules="rows" className="budget-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Limit</th>
            <th>StartDate</th>
            <th>EndDate</th>
          </tr>
        </thead>
        {budgets}
      </table> */}

      <div>
        <span className="budget-table title">Title</span>
        <span className="budget-table title">Limit</span>
        <span className="budget-table title">Start</span>
        <span className="budget-table title">End</span>
        {budgets}
      </div>
      
    </div>
    </>
  );
}




