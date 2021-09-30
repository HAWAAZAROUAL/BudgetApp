import Button from './Button'
import { BubbleChart } from 'reaviz'
import React, { useState } from 'react'
import { getincomeByMonth } from '../helpers/selectors'
export default function Account(props) {
  const [income, setIncome] = useState(0)
  const [income_type, setIncome_type] = useState('')

  function onAdd() {
    const incomes = {
      income: Number(income),
      income_type: income_type,
    }
    props.onAdd(props.userId, incomes).then(() => {})
  }

  // const monthIncome = getincomeByMonth(props.income,9,props.userId);
  const babbledata = function (monthIncome) {
    const keys = Object.keys(monthIncome)
    return (
      <BubbleChart
        height={300}
        width={300}
        data={[
          { key: keys[0], data: monthIncome[keys[0]] },
          { key: keys[1], data: monthIncome[keys[1]] },
          { key: keys[2], data: monthIncome[keys[2]] },
          { key: keys[3], data: monthIncome[keys[3]] },
        ]}
      />
    )
  }
  console.log(babbledata)
  return (
    <>
      {babbledata(getincomeByMonth(props.income, 9, props.userId))}
      <div className="account">
        <body>
          <p> Add Income </p>
          <form autoComplete="off">
            <input
              name="income"
              value={income}
              type="text"
              placeholder="Enter income amount"
              onChange={(event) => setIncome(event.target.value)}
            />
            <input
              name="income_type"
              value={income_type}
              type="text"
              placeholder="Enter income type"
              onChange={(event) => setIncome_type(event.target.value)}
            />
          </form>
          <Button id="add-income" onClick={() => onAdd()}>
            {' '}
            Add
          </Button>
        </body>
      </div>
    </>
  )
}
