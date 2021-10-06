export default function ShowIncome(props){
    return( <div>
        <span className="budget-table">{props.income_type}</span>
        <span className="budget-table">${props.income}</span>
        
         
      </div>);
}