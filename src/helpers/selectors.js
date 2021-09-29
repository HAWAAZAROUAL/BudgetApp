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
 
export  function getBudgetByMonth(budgets,month,userId) {
 
  const result={};
  let arr = Object.values(budgets);
  for(const budget of arr){

     const startDate = budget.start_date.split('T')[0];
     const  endDate = budget.end_date.split('T')[0];
     const userid=budget.user_id;
     let d1= new Date('2021-10-1');
     d1=d1.toISOString().split('T')[0];
     let d2= new Date('2021-10-31');
     d2=d2.toISOString().split('T')[0];
     console.log(startDate,endDate,d1,d2);
    if((startDate>=d1)&&(endDate<=d2) && (userid===userId )) {
      result[budget["name"]]=budget["budget_limit"];
    }   
  }
  return  result;
}