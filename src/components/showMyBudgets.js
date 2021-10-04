export default function ShowMybudgets(props) {
  let alert;
  if(Number(props.available)<=0){
    alert="SAVE";
  }
  return (
    <>
      <div>
        <span className="budget-table">{props.name}</span>
        <span className="budget-table">{props.budget}</span>
        <span className="budget-table">{props.available}</span>
        <span className="budget-table">{alert}</span>
        <hr></hr>
      </div>
    </>
  )
}
