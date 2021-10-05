import React from "react";
// import './Quotes.css'
import './Sidebar.css';

export default function Quotes(props) {
  
  return (
    <div className="quotes">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Arima+Madurai&display=swap');
      </style>
      <p><em>{props.quote}</em> – <b>{props.author}</b></p>
    </div>
  )
}