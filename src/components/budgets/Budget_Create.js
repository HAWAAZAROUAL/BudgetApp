
import React, { useState } from "react";
import Button from "../Button";
 
import DateRange from "./DataRangePicker";
 
 
 

export default function CreateBudget(props) {
  
  const [name, setName] = useState("");
  const [budget_limit, setbudget_limit] = useState(0);
  const [start_date, setstart_date] = useState(null);
  const [end_date, setend_date] = useState(null);
 
  function reset() {
      name("");
      setbudget_limit(""); 
    }
 function cancel() {
      reset();
      props.onCancel();
    }
 function onSave() {
  const budget={
    name:name,
    budget_limit:budget_limit,
    start_date: start_date,
    end_date:end_date
  };
  props.onSave(props.userId,budget)
  .then((res)=>{
    console.log(res);
  });
  
}
  function getDate(startDate,endDate){
    setstart_date(startDate);
    setend_date(endDate);
  } 
return (
      <div>
        <div>
        <form autoComplete="off">
          <input   name="name"
            value={ name}
            type="text"
            placeholder="Enter Budget Name"
            onChange={event => setName(event.target.value)}
            />
             <input
            name="budget_imit"
            value={budget_limit}
            type="text"
            placeholder="Enter Budget Limit"
            onChange={event => setbudget_limit(event.target.value)}
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
