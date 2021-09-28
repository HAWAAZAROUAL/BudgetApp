
import React, { useState } from "react";
import Button from "../Button";

import DateRange from "./DataRangePicker";

export default function CreateBudget(props) {
  console.log("props", props);
  const [name, setName] = useState(props.name || "");
  const [budget_limit, setbudget_limit] = useState(props.budgetLimit || 0);
  const [start_date, setstart_date] = useState(props.startDate || null);
  const [end_date, setend_date] = useState(props.endDate || null);

  function reset() {
    setName("");
    setbudget_limit(0);
  }
  function cancel() {
    reset();
    props.onCancel();
  }
  function onSave() {
    const budget = {
      name: name,
      budget_limit: budget_limit,
      start_date: start_date,
      end_date: end_date
    };
    console.log("props.userId", props.userId);
    props.onSave(props.userId, budget)
      .then((res) => {
        console.log(res);
      });

  }
  function getDate(startDate, endDate) {
    setstart_date(startDate);
    setend_date(endDate);
  }
  return (
    <div>
      <div>
        <form autoComplete="off">
          <input name="name"
            value={name}
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
      <DateRange getDate={getDate} startDate={props} endDate={props.endDate} mode={props.mode} />
      <div>  <Button danger onClick={cancel}>Cancel</Button>
        <Button confirm onClick={event => onSave()}> Save </Button>
      </div>

    </div>
  );

}
