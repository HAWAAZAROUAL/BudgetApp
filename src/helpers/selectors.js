// import expenses from "../../budget_api/src/routes/expenses";

export  function getBudgetByUserID(budgets,userId) {
  const budgetArr=[];
  for(const i in budgets){
    if(budgets[i]["user_id"]===userId){
      budgetArr.push(budgets[i]);
    }
  }
  const result = budgetArr.reverse();
  return result;
}
 function dateFormat(day){
     let d= new Date(day);
     d=d.toISOString().split('T')[0];
     return d;   
 }
export  function getBudgetByMonth(budgets,year,month,userId) {
 
  const result={};
  let arr = Object.values(budgets);
  for(const budget of arr){

     const startDate = budget.start_date.split('T')[0];
     const  endDate = budget.end_date.split('T')[0];
     const userid=budget.user_id;
     let d1;
     let d2;
     
     switch (month) {
       case 1:
          d1=dateFormat(year+'-01-01')
          d2=dateFormat(year+'-01-31')
          break;
       case 2:
          d1=dateFormat(year+'-02-01')
          d2=dateFormat(year+'-02-28')
          break;
      case 3:
          d1=dateFormat(year+'-03-01')
          d2=dateFormat(year+'-03-31')
          break;
      case 4:
          d1=dateFormat(year+'-04-01')
          d2=dateFormat(year+'-04-30')
          break;
      case 5:
          d1=dateFormat(year+'-05-01')
          d2=dateFormat(year+'-05-31')
          break;
      case 6:
          d1=dateFormat(year+'-06-01')
          d2=dateFormat(year+'-06-30')
          break;
      case 7:
          d1=dateFormat(year+'-07-01')
          d2=dateFormat(year+'-07-31')
          break;
      case 8:
          d1=dateFormat(year+'-08-01')
          d2=dateFormat(year+'-08-31')
          break;
      case 9:
          d1=dateFormat(year+'-09-01')
          d2=dateFormat(year+'-09-30')
          break;
      case 10:
          d1=dateFormat(year+'-10-01')
          d2=dateFormat(year+'-10-31')
          break;
      case 11:
          d1=dateFormat(year+'-11-01')
          d2=dateFormat(year+'-11-30')
          break;
      case 12:
          d1=dateFormat(year+'-12-01')
          d2=dateFormat(year+'-12-31')
          break;
       default:
         break;
     }
     console.log(d1,d2);
    if((startDate>=d1)&&(endDate<=d2) && (userid===userId )) {
      result[budget["name"]]=budget["budget_limit"];
    }   
  }
  return  result;
}
function getCategoryName(result,categories){
  const obj={};
  Object.keys(result).map((id) => {
          
          obj[categories[id].category_type] =result[id];
        
    });
    return obj;
}
export  function getExpenseByMonth(expenses,categories,month,userId) {
   const result={};
  let arr = Object.values(expenses);
  for(const expense of arr){
    
    const m=(new Date(expense.date)).getMonth()+1;
  
    if( m === month){
     
      if(Object.keys(result).includes((expense.category_id).toString())){
         
         result[expense.category_id] +=  expense.amount;
      }else{
         result[expense.category_id]= expense.amount;
      }  
    }
  }
  return getCategoryName(result,categories);
}
export  function getincomeByMonth(incomes,month,userId) {
   const result={};
  let arr = Object.values(incomes);
  for(const income of arr){
    
    const m=(new Date(income.date)).getMonth()+1;
  
    if( m === month){
     
      if(Object.keys(result).includes((income.income_type).toString())){
         
         result[income.income_type] +=  income.income;
      }else{
         result[income.income_type]= income.income;
      }  
    }
  }
  return result;
}


// -------This is to add expense to the Budget----------
// export function addExpense() {
//   return

// }

 