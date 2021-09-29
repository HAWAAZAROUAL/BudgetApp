import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Home.css";
import useApplicationData from "./hooks/useApplicationData";
import Nav from "./components/Nav";
import Account from "./components/Account";
import MyBudgets from "./components/MyBudgets";
import Sidebar from "./components/Sidebar";
import Pie from "./components/charts/Pie";
import BarGraph from "./components/charts/BarGraph";
import CreateBudget from "./components/budgets/index";
import LeftOver from "./components/charts/LeftOver";

const Home = () => {
  const { state, addCategories } = useApplicationData();
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

export default Home;