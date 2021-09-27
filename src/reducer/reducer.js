 

const reducers = {
   
    setData(state, action) {
        return {
            ...state,
            username: action.value.username, 
            budgets: action.value.budgets
          };
    },
    
    createBudgets(state,action){
    
        const arr=Object.keys(state.budgets);
        const id= arr[arr.length-1] ;
         

        const budgets = {...state.budgets};
        budgets[id]= {
          id:Number(id),
          name:  action.budgetName,
          budgetLimit: action.budgetLimit ,
          startDate: action.startDate ,  
          endDate:  action.endDate,
          user_id: action.userId
        };
         console.log({...state.budgets});
        return {...state.budgets};
        },
  };
 export default function reducer(state, action){
    return reducers[action.type](state, action) || state;
}      
 