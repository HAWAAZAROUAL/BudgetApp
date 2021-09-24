const reducers = {
   
    setData(state, action) {
        return {
            ...state,
            username: action.value.username, 
          };
    }
  };
 export default function reducer(state, action){
    return reducers[action.type](state, action) || state;
}      
 