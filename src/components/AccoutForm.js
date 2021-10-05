import Button from './Button'

import React, { useState } from 'react'
export default function AccountForm(props) {
  const [income, setIncome] = useState(0)
  const [income_type, setIncome_type] = useState('')
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  function onAdd() {
    const incomes = {
      date: date,
      income: Number(income),
      income_type: income_type,
    }
    props.onAdd(props.userId, incomes).then(() => {
      reset();
    })
  }

  function reset() {
    setIncome(0)
    setIncome_type('')
  }
  return (
    <div id="account">

      <p> Add Income </p>
      <form autoComplete="off">

        <input className="income-input"
          name="income_type"
          value={income_type}
          type="text"
          placeholder="Enter income type"
          onChange={(event) => setIncome_type(event.target.value)}
        />
        <input className="income-input"
          name="income"
          value={income}
          type="text"
          placeholder="Enter income amount"
          onChange={(event) => setIncome(event.target.value)}
        />
      </form>
      <div>
        <Button id="add-income" onClick={() => onAdd()}>
          {' '}
          Add
        </Button>

      </div>

    </div>
  );

}