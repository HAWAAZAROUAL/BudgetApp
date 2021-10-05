import {  totalExpenseByMonth,getTotalIncome } from "../helpers/selectors";
import ShowSummary from "./ShowSummary";
export default function Summary(props){
    
   const totalExpense = totalExpenseByMonth(props.expenses,  props.categories, 10, props.userId)
 
   const totalIncome=	getTotalIncome(props.incomes, props.userId);
   
   const balance= Number(totalIncome[['Oct']])- Number(totalExpense);
    
 return(
   <ShowSummary totalExpense={totalExpense} totalIncome={totalIncome[['Oct']]}
   
   balance={balance }/>



 );
}