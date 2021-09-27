 

const reducers = {
   
    setData(state, action) {
        return {
            ...state,
            username: action.value.username, 
            budgets: action.value.budgets
          };
    },
    
    createBudgets(state,action){
      const budget={
        ...state.budgets[action.userId],
        budget:{...action.budget}
      }
          const budgets = {
            ...state.budgets,
            [action.userId]:budget
          };
          
          return { ...state, budgets: budgets  };
        },
  };
 export default function reducer(state, action){
    return reducers[action.type](state, action) || state;
}      
 