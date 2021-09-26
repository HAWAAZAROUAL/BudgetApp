
import React, { useState } from "react";
import Button from "./Button";

import DateRange from "./DataRangePicker";

export default function CreateBudget(props) {
    
    const [state, setState] = useState({
         budget_name: "",
         budget_limit: "",
        })
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
               ...state,
               [evt.target.name]: value
              });
    }
    function reset() {
      setState(
        { 
          budget_name: "",
          budget_limit: "",
         
        });
    }
    function cancel() {
      reset();
      props.onCancel();
    }
    function onSave() {
      props.onSave(state.budget_name,state.budget_limit,state.startDate,state.endDate,props.userId);
    }
     
    return (
      <div>
        <div>
        <form autoComplete="off">
          <input   name="budgetName"
            value={state.budget_name}
            type="text"
            placeholder="Enter Budget Name"
            onChange={event => {handleChange()}}
            />
             <input
            name="budgetLimit"
            value={state.budget_limit}
            type="text"
            placeholder="Enter Budget Limit"
            onChange={event => {handleChange()}}
            />
            <DateRange startDate/>
        </form>
         
        
          
      </div>
     
       
        <div>  <Button danger onClick={cancel}>Cancel</Button>
        <Button confirm onClick={event => onSave()}> Save </Button>
        </div>
        
        </div> 
    );
    
  }
