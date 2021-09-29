
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
import useVisualMode from "./hooks/useVisulMode"
import CreateBudget from './components/budgets/Budget_Create';

const CREATE = 'CREATE'
const HOME = 'HOME'
const UPDATE = 'UPDATE'
const REPORTS = 'REPORTS'
 

export default function Home() {
  const { mode, transition, back } = useVisualMode(HOME)
  const {
       state,
       addCategories
  } = useApplicationData();

   
  
 console.log('state', state);
  return (
    <div className="App">
     <Nav name={state.username}/>
<<<<<<< HEAD
     <Sidebar email={state.email}/>
         <Budget/> 
         <Account /> 
   
     <Update />
     
     
      <Pie />
=======
     <Sidebar email={state.email}
          create={mode}/>

     {mode === HOME && (
       <Account />
     )}
     {mode === CREATE && (
       <CreateBudget />

     )}
     {mode === UPDATE && (
       <Update />

     )}
     {mode === REPORTS && (
       <Budget/>

     )}
     

      <Pie categories= {state.categories}
     expenses={state.expenses}/>
>>>>>>> 69c0a28f2a4b82fea26c895d823935e8a48783ab
     <BarGraph categories= {state.categories}
     expenses={state.expenses}/>
    </div>
  );
};


