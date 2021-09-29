import ShowBudgetItem from './BudgetItemShow';
import CreateBudget from './Budget_Create';
import useVisualMode from "../../hooks/useVisulMode";


export default function BudgetShow(props) {

  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const EDIT = "EDIT";
  const { mode, transition, back } = useVisualMode(
    SHOW
  );


  function deleteBudget(id) {
    props
      .deleteBudget(props.id)
      .then(() => transition(SHOW))
  }

  function edit() {
    transition(EDIT);
  }

  return (
    <article>
      {mode === SHOW && <ShowBudgetItem
        id={props.id}
        userid={props.userid}
        budgetName={props.budgetName}
        budgetLimit={props.budgetLimit}
        startDate={props.startDate}
        endDate={props.endDate}
        onEdit={edit}
        onDelete={deleteBudget}
      />
      }
      
      {mode === EDIT && <CreateBudget
        userId={props.userid} 
        onSave={props.updateBudget}
        onCancel={back}
        name={props.budgetName}
        budgetLimit={props.budgetLimit}
        startDate={props.startDate}
        endDate={props.endDate}
        id={props.id}
      />
      }
    </article>
  );
}