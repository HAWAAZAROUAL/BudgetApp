import React from 'react'
import Button from './Button'

export default function Account() {
  function clickMe() {
    alert('clicked!')
  }
  return (
    <div class="account">
      <h1>Welcome to Budget Buddy!</h1>
      <h2> Set up your account by adding an Income!</h2>
      <Button onClick={clickMe}> Add Income </Button>
      <input type="text"></input>
      <Button id="add-income"> &#43;</Button>
    </div>
  )
}
