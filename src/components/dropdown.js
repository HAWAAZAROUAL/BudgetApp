import React,{useState} from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import './Update.css'

function DropdownMenu(props) {
  const [value,setValue]=useState('');
   const handleSelect=(e)=>{
     console.log(e);
     setValue(e);
     props.getValue(e);
   }
   let categoryName;
   if(props.budgets){
       const budgets=props.budgets;
      categoryName= Object.keys(budgets).map(k=>{
        return (
             <Dropdown.Item eventKey={budgets[k]["name"]}>
              {budgets[k]["name"]}
             </Dropdown.Item>
             );
       });
   }
   
   return (
     <div  >
      
       <DropdownButton
       alignRight
       title="Category"
       id="dropdown-menu-align-right"
       onSelect={handleSelect}
         >
             {categoryName} 
                
      </DropdownButton>
       
     </div>
   );
 }
 
 export default DropdownMenu;