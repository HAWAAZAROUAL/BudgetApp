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
  const { state, addCategories, addIncome,createBudget,
    updateBudget,
    deleteBudget} = useApplicationData()
  console.log("state",state);
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Arima+Madurai&display=swap');
      </style>
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
              <CreateBudget  budgets={state.budgets}  userId={state.userId}
                            createBudget={createBudget}
                            updateBudget={updateBudget}
                            deleteBudget={deleteBudget}/>
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
              <Account onAdd={addIncome} userId={state.userId} income={state.incomes}/>{' '}
            </h1>
          
              <div id="pie-chart">
                <p>Expenses</p>
                <Pie categories={state.categories} expenses={state.expenses} />
                </div>
                <br />
                <div id="bar-graph">
                <p>Expenses</p>
                <BarGraph
                  categories={state.categories}
                  expenses={state.expenses}
                />
                </div>
                <br />
                <div id="time-graph">
                <p>Income</p>
                <section>
                <IncomeTime 
                className="income-time"
                incomes={state.incomes}/>
                </section>
                {/* <LeftOver /> */}
              </div>
            
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Home
