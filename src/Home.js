import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './Home.css'
import useApplicationData from './hooks/useApplicationData'
import Nav from './components/Nav'
import Account from './components/Account'
import MyBudgets from './components/MyBudgets'
import Sidebar from './components/Sidebar'
import Pie from './components/charts/Pie'
import BarGraph from './components/charts/BarGraph'
import CreateBudget from './components/budgets/index'
import { getQuotesKey } from './helpers/selectors'
import Summary from './components/summary'
import IncomeTime from './components/charts/IncomeTime'
import Quotes from './components/Quotes'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import IncomeReport from './components/reports/income.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faHome,
  faEdit,
  faStream,
} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faHome, faEdit, faStream)

const Home = () => {
  const { state,  addIncome,createBudget,addExpense,
    updateBudget,
    deleteBudget,
  } = useApplicationData()
  const quoteKey = getQuotesKey(state.quotes)
  // console.log('quoteKey', quoteKey)
  // console.log('state', state)
  // console.log("QUOTESSSS", state.quotes[quoteKey])
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
        <div>
          <Quotes quote={state.quotes[quoteKey].quote} author={state.quotes[quoteKey].author} />
        </div>
        <div className="budget-calendar">
        
        <Calendar  />
       
        </div>
        
        <Switch>
          <Route path="/Create">
         
            <div id="create">
            <Summary incomes={state.incomes} 
               const totalIncome  userId={state.userId}
                categories={state.categories} expenses={state.expenses}  /> 
              <CreateBudget
                budgets={state.budgets}
                userId={state.userId}
                createBudget={createBudget}
                updateBudget={updateBudget}
                deleteBudget={deleteBudget}
              />
            </div>
          </Route>

          <Route path="/MyBudgets">
            <div id="budgets">
              <MyBudgets onAdd={addExpense} userId={state.userId} 
              expense={state.expenses}
              categories={state.categories}
              budgets={state.budgets}/>
            </div>
          </Route>

          <Route path="/">
            <div id="income-graph">
              <p>Your current incomes</p>
              < IncomeReport   incomes={state.incomes} month={10} userId={state.userId}/>
              </div>
              <div id="income">
              <Account
                onAdd={addIncome}
                userId={state.userId}
                income={state.incomes}
              />{' '}
              </div>
            

            <div id="pie-chart">
              <p>Expenses</p>
              <Pie categories={state.categories} expenses={state.expenses} />
            </div>

            <div id="bar-graph">
              <p>Expenses</p>
              <BarGraph
                categories={state.categories}
                expenses={state.expenses}
              />
            </div>

            <div id="time-graph">
              <p>Income</p>
              <section>
                <IncomeTime className="income-time" incomes={state.incomes} />
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
