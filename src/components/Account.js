import AccountForm from './AccoutForm';
import { getincomeByMonth } from '../helpers/selectors'
import '../Home.css'

export default function Account(props) {
  
const currentMonth=new Date().getMonth()+1;
const monthIncome = getincomeByMonth(props.income,currentMonth,props.userId);
 
 const data = Object.keys(monthIncome).map(key=>{
     return(
       <tr><td>{key}</td><td>---{monthIncome[key]}</td></tr>
      ); 
   });
 
  return (
    <>
     <AccountForm onAdd={props.onAdd} userId={props.userId}/>
     <table>{data}</table>
      
    </>
  )
}
