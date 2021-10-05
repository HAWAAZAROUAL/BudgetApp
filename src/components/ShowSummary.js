export default function ShowSummary(props){
    return (
        <div>
        <span className="budget-table">{props.totalIncome}</span>
        <span className="budget-table">{props.totalExpense}</span>
        <span className="budget-table">{props.balance}</span>
         
        </div>
       
    );
}