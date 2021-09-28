import Button from "../Button";
export default function ShowBudgetItem(props) {

  return (
    <thead>
      <tr>
        <th>{props.budgetName}</th>
        <th>{props.budgetLimit}</th>
        <th>{props.startDate}</th>
        <th>{props.endDate}</th>
        <th>

          <Button onClick={props.onEdit}>Edit</Button> </th>
        <th>
          < Button onClick={props.onDelete}>Delete</Button>



        </th>

      </tr>
    </thead>

  );
}