import React, { useState } from 'react'
import Button from '../Button'
// import useVisualMode from '../../hooks/useVisualMode'
import DateRange from './DataRangePicker'
import './Form.css'

export default function Form(props) {
   
  const [name, setName] = useState(props.name || '')
  const [budget_limit, setbudget_limit] = useState(props.budgetLimit || 0)
  const [start_date, setstart_date] = useState(props.startDate || null)
  const [end_date, setend_date] = useState(props.endDate || null)

  function reset() {
    setName('')
    setbudget_limit(0)
  }
  function cancel() {
    props.id ? props.onCancel() : reset()
  }
  function onSave() {
    const budget = {
      name: name,
      budget_limit: budget_limit,
      start_date: start_date,
      end_date: end_date,
    }

    if (props.id) {
      props.onSave(props.id, budget, props.userId).then((res) => {
        props.onCancel()
      })
    } else {
      props
        .onSave(props.userId, budget)

        .then((res) => {
          reset()
        })
    }
  }
  function getDate(startDate, endDate) {
    setstart_date(startDate)
    setend_date(endDate)
  }
  return (
    <div>
      <div className="input-form">
        <form autoComplete="off">
          <input
            name="name"
            value={name}
            type="text"
            placeholder="Enter Budget Name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            name="budget_imit"
            value={budget_limit}
            type="text"
            placeholder="Enter Budget Limit"
            onChange={(event) => setbudget_limit(event.target.value)}
          />
        </form>
      </div>
      <div className="date-range">
        <DateRange
          getDate={getDate}
          startDate={props}
          endDate={props.endDate}
          mode={props.mode}
        />
      </div>
      <div className="input-btns">
        {' '}
        <Button danger onClick={cancel}>
          Cancel
        </Button>
        </div>
        <div className="input-btns">
        <Button confirm onClick={(event) => onSave()}>
          {' '}
          Save{' '}
        </Button>
      </div>
    </div>
  )
}
