import React from 'react'
import Button from './Button'

export default function Account() {
  function clickMe() {
    alert('clicked!')
  }
  return (
    <div class="account">
      <body>
      <p> Add Income </p>
      <input type="text"></input>
      <Button id="add-income"> Add</Button>
      </body>

    </div>
  )
}
