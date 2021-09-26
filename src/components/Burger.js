import React, {useState} from 'react';
import Hamburger from 'hamburger-react';

export default function Burger () {
  console.log("this is the burger")
  const [isOpen, setOpen] = useState(false);
<Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
return (
  <>

  </>
)
}
