import AccountForm from './AccoutForm';
import { getincomeByMonth } from '../helpers/selectors'
import '../Home.css'
import ShowIncome from './ShowIncome';
export default function Account(props) {
  
const currentMonth=new Date().getMonth()+1;
console.log("props.income",props.income);
const monthIncome = getincomeByMonth(props.income,currentMonth,props.userId);
 
 const data = Object.keys(monthIncome).map(key=>{
     return(
      <ShowIncome income_type={key} income={monthIncome[key]} />
      ); 
   });
 
  return (
    <>
     <AccountForm onAdd={props.onAdd} userId={props.userId}/>
     <hr></hr>
     <table>{data}</table>
     <hr></hr>
    </>
  )
}
