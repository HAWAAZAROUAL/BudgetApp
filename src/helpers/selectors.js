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