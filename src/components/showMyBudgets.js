import './Update.css'
export default function ShowMybudgets(props) {
//   const alertstyle = {
//   display: "initial",
//   backgroundColor: "crimson",
//   borderRadius: "10px",
//   fontSize: "15px",
//   padding: "5px",
//   color: "white"
// }
let alert;
  if(Number(props.available)<0){
    alert="You are over budget";
  }


  return (
    <>
      <div>
        <span className="budget-table">{props.name}</span>
        <span className="budget-table">{props.budget}</span>
        <span className="budget-table">{props.available}</span>
        <div>
        <span className="budget-table budget-alert">{alert}
        
        </span>

        </div>
        <hr></hr>
      </div>
    </>
  )
}
