import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Home.css";
import useApplicationData from "./hooks/useApplicationData";
import Nav from "./components/Nav";
import Account from "./components/Account";
import MyBudgets from "./components/MyBudgets";
import Sidebar from "./components/Sidebar";
import Budget from "./components/budgets/index";
import Pie from "./components/charts/Pie";
import BarGraph from "./components/charts/BarGraph";
import CreateBudget from "./components/budgets/index";
import LeftOver from "./components/charts/LeftOver";

const Home = () => {
<<<<<<< HEAD
  const {
    state,
    addCategories,
    addIncome
  } = useApplicationData();
=======
  const { state, addCategories } = useApplicationData();
>>>>>>> 7a1d0fa474fb063e81a1a87c04416b884c1afd49
  return (
    <div className="App">
      <Router>
        <nav>
          <Nav name={state.username} />
          </nav>
          <div>
            <Sidebar email={state.email} />
          </div>
        

        <Switch>

          <Route path="/Create">
            <body id="create">
             <CreateBudget /> 
            </body>
            
          </Route>

          <Route path="/MyBudgets">
            <body id="budgets">
              <MyBudgets />
            </body>
            
          </Route>

          <Route path="/">
<<<<<<< HEAD
            <Account onAdd={addIncome} userid={state.userId}/>
           <Pie categories= {state.categories}
           expenses={state.expenses}/>
=======
              <h1 id="income"> <Account /> </h1>
            <body id="homepage">
              <div>
                <Pie categories={state.categories} expenses={state.expenses} />
                <br />
                <BarGraph
                  categories={state.categories}
                  expenses={state.expenses}
                />
                <br />
                <LeftOver />
              </div>
            </body>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
>>>>>>> 7a1d0fa474fb063e81a1a87c04416b884c1afd49

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
