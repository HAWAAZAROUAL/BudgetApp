
import React, { useState } from "react";
import Button from "./Button";
import BasicDateRangePicker from './BasicDateRangePicker';
import DateRange from "./DataRangePicker";


export default function CreateBudget(props) {
    
  const [budgetName, setbudgetName] = useState("");
  const [budgetLimit, setbudgetLimit] = useState(0);
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState(0);
  function reset() {
      setbudgetName("");
        setbudgetLimit(""); 
    }
 function cancel() {
      reset();
      props.onCancel();
    }
 function onSave() {
      props.onSave(budgetName,budgetLimit,startDate,endDate,2);
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
