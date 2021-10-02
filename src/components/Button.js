import React from "react";
import './Button.css';

// import "components/Button.scss";

export default function Button(props) {
      
   return (
      <button className="all-btns"
        //  className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}
      >  
         {props.children}
         
      </button>
      );
}