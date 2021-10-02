import AccountForm from './AccoutForm';
import { getincomeByMonth } from '../helpers/selectors'
import '../Home.css'
import ShowIncome from './ShowIncome';
export default function Account(props) {
  
const currentMonth=new Date().getMonth()+1;
const monthIncome = getincomeByMonth(props.income,currentMonth,props.userId);
 
 const data = Object.keys(monthIncome).map(key=>{
     return(
      <ShowIncome income_type={key} income={monthIncome[key]}/>
      ); 
   });
 
  return (
    <>
     <AccountForm onAdd={props.onAdd} userId={props.userId}/>
     <table>{data}</table>
    </>
  )
}
