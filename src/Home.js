
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
       createBudget,
       addCategories
  } = useApplicationData();
  
 console.log('state', state);
  return (
    <div className="App">
     <Nav name={state.username}/>
     <Sidebar />
     <Account />
     <Update />
     
     <Budget 
         budgets={ state.budgets}
         userid={state.userId}
         createBudget={createBudget}
         userId={state.userId}
     />
     <Pie />
     <BarGraph />
    </div>
  );
};
