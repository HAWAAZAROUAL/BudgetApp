export default function ShowExpense(props){
    return( 
        <>
       
        <div>
        <span className="budget-table">{props.name}</span>------
        <span className="budget-table">{props.budget}</span>------
        <span className="budget-table">{props.available}</span>
        
         
      </div>
      </>);
      
      
}