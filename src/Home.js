import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './Home.css';
import useApplicationData from "./hooks/useApplicationData";
import Nav from './components/Nav';
import Account from './components/Account';
import Update from './components/Update';
import Sidebar from './components/Sidebar';
import Budget from './components/budgets/index';
import Pie from './components/charts/Pie';
import BarGraph from './components/charts/BarGraph';
import CreateBudget from './components/budgets/Budget_Create';

 


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

          <Route path="/Update">

          </Route>

          <Route path="/">
<Pie categories= {state.categories}
           expenses={state.expenses}/>
           <BarGraph categories= {state.categories}
           expenses={state.expenses}/>

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