import './Nav.css';
// import {Menu} from '../Menu.gif';

export default function Nav(props) {

  return (
      <div class="nav-bar">
          <h1>{props.name}</h1>
        <div class="menu-logo">
        <i class="fas fa-bars"></i>
       
        </div>
      </div>
  );
}