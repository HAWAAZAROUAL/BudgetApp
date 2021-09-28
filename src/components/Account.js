import React from 'react'
import Button from './Button'

export default function Account() {
  function clickMe() {
    alert('clicked!')
  }
  return (
    <div class="account">
      <body>
      <h1>Welcome to Budget Buddy!</h1>
      <h2> Set up your account by adding an Income!</h2>
      <p> Add Income </p>
      <input type="text"></input>
      <Button id="add-income"> Add</Button>
      </body>

    </div>
  )
}
