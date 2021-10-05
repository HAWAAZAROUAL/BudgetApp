import ShowBudgetItem from './BudgetItemShow';
import Form from './Form';
import useVisualMode from "../../hooks/useVisulMode";


export default function BudgetShow(props) {

  const SHOW = "SHOW";

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
    <>
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

      {mode === EDIT && <Form
        userId={props.userid}
        onSave={props.updateBudget}
        onCancel={back}
        name={props.budgetName}
        budgetLimit={props.budgetLimit}
        id={props.id}
        startDate={props.startDate}
        endDate={props.endDate}
        amount={props.amount}
      />
      }
    </>
  );
}