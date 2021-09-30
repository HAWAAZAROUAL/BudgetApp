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
import IncomeTime from "./components/charts/IncomeTime";

const Home = () => {
  const { state, addCategories, addIncome } = useApplicationData()
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
            <div id="create">
              <CreateBudget />
            </div>
          </Route>

          <Route path="/MyBudgets">
            <div id="budgets">
              <MyBudgets />
            </div>
          </Route>

          <Route path="/">
            <h1 id="income">
              {' '}
              <Account onAdd={addIncome} userId={state.userId} />{' '}
            </h1>
            <div id="homepage">
              <div>
                <Pie categories={state.categories} expenses={state.expenses} />
                <br />
                <BarGraph
                  categories={state.categories}
                  expenses={state.expenses}
                />
                <br />
                <IncomeTime />
                <LeftOver />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Home
