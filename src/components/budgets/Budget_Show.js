export default function ShowBudget(props){
    return(
     <thead>
      <tr>
        <th>{props.budgetName}</th>
        <th>{props.budgetLimit}</th>
        <th>{props.startDate}</th>
        <th>{props.endDate}</th>
      </tr>
     </thead>
        
    );
}