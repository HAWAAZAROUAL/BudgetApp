import './Update.css'
export default function ShowExpense(props) {
  return (
    <>
      <div>
        <span className="budget-table">{props.name}</span>
        <span className="budget-table">${props.amount}</span>
        <hr></hr>
      </div>
    </>
  )
}
