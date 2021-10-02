 

const reducers = {
   
    setData(state, action) {
        return {
            ...state,
            username: action.value.username, 
            budgets: action.value.budgets,
            categories: action.value.categories,
            expenses: action.value.expenses,
            incomes:action.value.incomes,
            email: action.value.email,
            quotes: action.value.quotes
          };
    },
    
    createBudgets(state,action){
    
        const arr=Object.keys(state.budgets);
        const id= arr[arr.length-1] ;
        const newID= Number(id)+1;
        const budgets = {...state.budgets};
        budgets[newID]= {
          id:Number(newID),
          name:  action.name,
          budget_limit: action.budget_limit ,
          start_date: action.start_date ,  
          end_date:  action.end_date,
          user_id: action.user_id,
          amount:action.budget_limit
        };
        return {...state,budgets:budgets};
        },
    addIncome(state,action){
       
       const arr=Object.keys(state.incomes);
        const id= arr[arr.length-1] ;
        const newID= Number(id)+1;
        const incomes = {...state.incomes};
        incomes[newID]= {
          id:Number(newID),
          
          income:  action.income,
          income_type: action.income_type,
          date: action.date,
          user_id:   action.user_id
        };
        return {...state,incomes:incomes};
    },
       
    addExpense(state,action){
      console.log("addstate...",state);
      const arr=Object.keys(state.expenses);
       const id= arr[arr.length-1] ;
       const newID= Number(id)+1;
       const expenses = {...state.expenses};
       expenses[newID]= {
         id:Number(newID),
        
         date: action.date,
         category_id:  action.category_id,
          amount: action.amount,
          user_id:   action.user_id
       };
       const budgets = {...state.budgets};
       budgets[action.budgetId]["amount"]=action.available;
       return { 
         ...state,
        budgets: budgets,expenses:expenses};
    },

     deleteBudget(state,action){
       
      const budgets = {...state.budgets};
      delete budgets[action.id]
      return {
        ...state,
        budgets:budgets
      };   
    },

  updateBudgets(state,action){
       
      const budgets = {...state.budgets};
       
       budgets[action.id]["name"]=action.name;
       budgets[action.id]["budget_limit"]= action.budget_limit;
       budgets[action.id]["start_date"]=action.start_date;
       budgets[action.id]["end_date"]=action.end_date;
        
       return { 
        ...state,
       budgets: budgets 
      };  
    }
 };
  
  export default function reducer(state, action){
    return reducers[action.type](state, action) || state;
}    
 