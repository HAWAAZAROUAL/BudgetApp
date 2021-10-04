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
   if(props.categories){
       const categories=props.categories;
      categoryName= Object.keys(categories).map(k=>{
        return (
             <Dropdown.Item eventKey={categories[k]["category_type"]}>{
                categories[k]["category_type"]
             }</Dropdown.Item>
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