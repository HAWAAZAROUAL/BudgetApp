
import './Home.css';
import './components/Nav';
import useApplicationData from "./hooks/useApplicationData";
import Nav from './components/Nav';
import Account from './components/Account';
import Update from './components/Update';
import Create from './components/CreateBudget'


export default function Home() {
  const {state
  } = useApplicationData();
    
  return (
   
    <div className="App">
     <Nav name={state.username}/>
     <Account />
     <Update />
     <Create />
    </div>
  );
};