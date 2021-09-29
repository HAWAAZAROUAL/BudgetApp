import useApplicatonData from '../../hooks/useApplicationData';

import { getBudgetByUserID,getBudgetByMonth,getExpenseByMonth } from '../../helpers/selectors';
import BudgetShow from './Budget_Show'
import CreateBudget from './Budget_Create'
export default function Budget() {
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
     <CreateBudget 
             onSave={createBudget} 
             userId={state.userId} 
             
             />
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>BudgetName</th>
            <th>BudgetLimit</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {budgets}
      </table>
    </div>
    </>
  );
}




