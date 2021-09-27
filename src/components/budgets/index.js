import ShowBudget from './Budget_Show';
import CreateBudget from './Budget_Create';
import useVisualMode from '../../hooks/useVisulMode';
import {getBudgetByUserID} from '../../helpers/selectors';
export default function Budget(props){
    
    const SHOW = "SHOW";
    const CREATE ="CREATE";
    const EDIT = "EDIT";
    const { mode, transition, back } = useVisualMode(
         SHOW
    );

  function onEdit(){
   props.updateBudget();
  }
  function onDelete(){
    props.deleteBudget();
  }
  /**
   * Get budget by userID
   */
  const userBudget=getBudgetByUserID(props.budgets,props.userid)
  const budgets=userBudget.map((budget)=>{
    const  starDate=budget.start_date;
    const endDate=budget.end_date;
    
    return(
     <ShowBudget 
        budgetName={budget.name}
        budgetLimit={budget.budget_limit}
        startDate={starDate}
        endDate={endDate}
        onEdit={onEdit}
        onDelete={onDelete}
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
      {mode === EDIT &&  <CreateBudget onSave={props.createBudget} userId={props.userId} budgets={budgets}/>}
      </>
    );
  }
  