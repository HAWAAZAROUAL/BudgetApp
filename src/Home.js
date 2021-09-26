
import './Home.css';
import './components/Nav';
import useApplicationData from "./hooks/useApplicationData";
import Nav from './components/Nav';
import Account from './components/Account';
import Update from './components/Update';
import BasicDateRangePicker from './components/BasicDateRangePicker';
import Burger from './components/Burger';
import Sidebar from './components/Sidebar';


export default function Home() {
  const {state
  } = useApplicationData();
    
  return (
      
    
    <div className="App">
     <Nav name={state.username}/>
     <Sidebar />
     <Account />
     <Update />
     <BasicDateRangePicker />
     <Burger />
    </div>
  );
};
