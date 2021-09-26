const reducers = {
   
    setData(state, action) {
        return {
            ...state,
            username: action.value.username, 
          };
    },
    
    createBudgets(state,action){
      
     
          const budgets = {
            ...state.budgets,
          };
          
          return { ...state, budgets: budgets  };
        },
  };
 export default function reducer(state, action){
    return reducers[action.type](state, action) || state;
}      
 