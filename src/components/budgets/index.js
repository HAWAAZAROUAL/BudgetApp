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
      <div id="budgetshow">
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
      </div>
      );
  });
  return (
    <>
<<<<<<< HEAD
    <div id="form">
=======
    <div className="new-budget">
>>>>>>> d43f07cee9cb1a43f9b66f71ef91d8c8f4f9c65b
     <Form
             onSave={createBudget} 
             userId={state.userId} 
             
             />
             </div>
    <div className="App">
      <table border="1" frame="void" rules="rows" className="budget-table">
        <thead>
          <tr>
            <th>Budget Name</th>
            <th>Budget Limit</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        {budgets}
      </table>
    </div>
    </>
  );
}




