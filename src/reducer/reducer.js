 

const reducers = {
   
    setData(state, action) {
        return {
            ...state,
            username: action.value.username, 
            budgets: action.value.budgets,
            categories: action.value.categories,
            expenses: action.value.expenses
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
          user_id: action.user_id
        };
        return {...state,budgets:budgets};
        },
  };
 export default function reducer(state, action){
    return reducers[action.type](state, action) || state;
}      
 