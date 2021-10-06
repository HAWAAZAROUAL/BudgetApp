import Button from '../Button'
// import './Budget_Show.css'

export default function ShowBudgetItem(props) {
  return (
    
    <div>
      <span className="budget-table">{props.budgetName}</span>
      <span className="budget-table">${props.budgetLimit}</span>
      <span className="budget-table period">{props.startDate}</span>
      <span className="budget-table period">{props.endDate}</span>
      <div>
        <span className="your-budgets-btn">
          <Button onClick={props.onEdit}>Edit</Button>
        </span>
        <span className="your-budgets-btn">
          <Button onClick={props.onDelete}>Delete</Button>
        </span>
      </div>
    </div>
  )
}
