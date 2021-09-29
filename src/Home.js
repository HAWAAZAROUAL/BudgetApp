import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './Home.css';
import useApplicationData from "./hooks/useApplicationData";
import Nav from './components/Nav';
import Account from './components/Account';
import MyBudgets from './components/MyBudgets';
import Sidebar from './components/Sidebar';
import Budget from './components/budgets/index';
import Pie from './components/charts/Pie';
import BarGraph from './components/charts/BarGraph';
import CreateBudget from './components/budgets/Budget_Create';
import LeftOver from './components/charts/LeftOver';

 


const Home = () => {
  const {
    state,
    addCategories
  } = useApplicationData();
  return (
    <div className="App">

    <Router>
      <nav>
<Nav name={state.username}/>
        <div>
        <Sidebar email={state.email}/>
        </div>

      </nav>

      <Switch>

        <Route path="/Account">
        
          </Route>

          <Route path="/Create">
            <CreateBudget/>
          </Route>

          <Route path="/MyBudgets">
            <MyBudgets />

          </Route>

          <Route path="/">
            <Account />
<Pie categories= {state.categories}
           expenses={state.expenses}/>

           <BarGraph categories= {state.categories}
           expenses={state.expenses}/>

           <LeftOver />

          </Route>
        
        </Switch>
        
        </Router>
        </div>
        
        )
      };

      export default Home;
      
      
      
      // export default function Home() {
      //   const {
      //        state,
      //        addCategories
      //   } = useApplicationData();
        
      //  console.log('state', state);
      //   return (
      //     <div className="App">
      //      <Nav name={state.username}/>
      //      <Sidebar email={state.email}/>
      //      <Account />
      //      <Update />
           
      //      <Budget/>
      //       <Pie categories= {state.categories}
      //      expenses={state.expenses}/>
      //      <BarGraph categories= {state.categories}
      //      expenses={state.expenses}/>
      //     </div>
      //   );
      // };