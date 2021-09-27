

export default function ShowBudget(props){
     
    return(
     <thead>
      <tr>
        <th>{props.budgetName}</th>
        <th>{props.budgetLimit}</th>
        <th>{props.startDate}</th>
        <th>{props.endDate}</th>
        <th> 
            <img
              className="appointment__actions-button"
              src=""
              alt="Edit"
              onClick={props.onEdit}
              />
            <img
              className="appointment__actions-button"
              src="images/trash.png"
              alt="Delete"
              onClick={props.onDelete}
              />
          </th>
      </tr>
     </thead>
        
    );
}