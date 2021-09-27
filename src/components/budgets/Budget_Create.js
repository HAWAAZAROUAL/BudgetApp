
import React, { useState } from "react";
import Button from "../Button";
 
import DateRange from "./DataRangePicker";
import Budget from "./index"
 


export default function CreateBudget(props) {
  
  const [budgetName, setbudgetName] = useState("");
  const [budgetLimit, setbudgetLimit] = useState(0);
  const [startDate, setstartDate] = useState(null);
  const [endDate, setendDate] = useState(null);
 
  function reset() {
      setbudgetName("");
      setbudgetLimit(""); 
    }
 function cancel() {
      reset();
      props.onCancel();
    }
 function onSave() {
  const budget={
    budgetName:budgetName,
    budgetLimit:budgetLimit,
    startDate: startDate,
    endDate:endDate 
  };
  props.onSave(props.userId,budget)
  .then(()=>{
   return (<Budget />);

  });
  
}
  function getDate(startDate,endDate){
    setstartDate(startDate);
    setendDate(endDate);
  } 
return (
      <div>
        <div>
        <form autoComplete="off">
          <input   name="budgetName"
            value={ budgetName}
            type="text"
            placeholder="Enter Budget Name"
            onChange={event => setbudgetName(event.target.value)}
            />
             <input
            name="budgetLimit"
            value={budgetLimit}
            type="text"
            placeholder="Enter Budget Limit"
            onChange={event => setbudgetLimit(event.target.value)}
            />
        </form>
      </div>
      <DateRange getDate={getDate}/> 
        <div>  <Button danger onClick={cancel}>Cancel</Button>
        <Button confirm onClick={event => onSave()}> Save </Button>
        </div>
        
        </div> 
    );
    
  }
