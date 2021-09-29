import './Nav.css';
// import {Menu} from '../Menu.gif';

// font style

export default function Nav(props) {

  return (
      <div className="nav-bar">
         <style>
@import url('https://fonts.googleapis.com/css2?family=Arima+Madurai&display=swap');
</style> 
          <h1>{props.name}</h1>
          <h1>
           Budget Buddy</h1>
        <div className="menu-logo">
        <i className="fas fa-bars"></i>
       
        </div>
      </div>
  );
}