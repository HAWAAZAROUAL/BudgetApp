import './Nav.css'
import BudgetBuddyLogo from '../BudgetBuddyLogo.png';
// import {Menu} from '../Menu.gif';

// font style

export default function Nav(props) {
  return (
    <div className="nav-bar">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Arima+Madurai&display=swap');
      </style>
      {/* <h1>{props.name}</h1> */}
      <div>
        <img className="logo" src={BudgetBuddyLogo} alt="Logo"/>
      </div>
      <h4><em>Be your money's master, not its slave.</em></h4>
    </div>
  )
}
