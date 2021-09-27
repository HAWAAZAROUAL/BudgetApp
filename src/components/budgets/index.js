import ShowBudget from './Budget_Show';
import CreateBudget from './Budget_Create';
export default function Budget(props) {
   
 function getBudgetByUserID(budgets,userId) {
    const budgetArr=[];
    for(const i in budgets){
      if(budgets[i]["user_id"]===userId){

        budgetArr.push(budgets[i]);
      }
    }
    const result = budgetArr.reverse();
    return result;
}
  const userBudget=getBudgetByUserID(props.budgets,props.userid)
  const budgets=userBudget.map((budget)=>{
    let starDate;
    let endDate
    if(budget.start_date &&budget.end_date){
       starDate=budget.start_date.split('T')[0];
       endDate=budget.end_date.split('T')[0];
    }
    return(
     <ShowBudget 
        budgetName={budget.name}
        budgetLimit={budget.budget_limit}
        startDate={starDate}
        endDate={endDate}
     />
     );
  });
  return (
    <>
    <CreateBudget onSave={props.createBudget} userId={props.userId} budgets={budgets}/> 
      <div className="App">
        <table>
        <thead>
        <tr>     
         <th>BudgetName</th>
         <th>BudgetLimit</th>
         <th>StartDate</th>
         <th>EndDate</th>     
        </tr>
        </thead>
          {budgets}
       </table>
      </div>
      </>
    );
  }
  