
import './Home.css';
import './components/Nav';
import useApplicationData from "./hooks/useApplicationData";
import Nav from './components/Nav';
import Account from './components/Account';
import Update from './components/Update';
import Sidebar from './components/Sidebar';
import Budget from './components/budgets/index';
import Pie from './components/charts/Pie';
import BarGraph from './components/charts/BarGraph';
 

export default function Home() {
  const {
       state,
       addCategories
  } = useApplicationData();

   
  
 console.log('state', state);
  return (
    <div className="App">
     <Nav name={state.username}/>
     <Sidebar email={state.email}/>
         <Budget/> 
         <Account /> 
   
     <Update />
     
     
      <Pie />
     <BarGraph categories= {state.categories}
     expenses={state.expenses}/>
    </div>
  );
};


