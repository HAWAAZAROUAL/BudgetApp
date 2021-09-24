
import './Home.css';
import './components/nav';
import useApplicationData from "./hooks/useApplicationData";
import Nav from './components/nav';


export default function Home() {
  const {
    state
  } = useApplicationData();
    
  
  
   
  return (
   
    <div className="App">
     <Nav name={state.username}/>
    </div>
  );
};