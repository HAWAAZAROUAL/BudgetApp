import axios from "axios";
import { useReducer, useEffect } from "react";
import reducer from "../reducer/reducer";

/**
 * 
 * data processed by using axios
 * geting data from api, inserting data to api and deleting data from api
 * including bookInterviews, cancelInterviews and getInterviews
 */
export default function useApplicatonData(){
    const [state,dispatch] = useReducer(reducer,{
        userId:2,
        username: null,
        budgets:{}
      });
      
    useEffect(()=>{
     Promise.all([
       axios.get('http://localhost:8080/api/users'),
       axios.get(`http://localhost:8080/api/budgets/`)
    ])
       .then((all) => {
       const username =all[0].data[2]["first_name"];
       const budgets= all[1].data;
       
       dispatch({
        type: "setData",
        value: {username,budgets}
      });
     });
     // eslint-disable-next-line
    },[]);  


    function createBudget(userId,budget){
     
      return axios.put(`http://localhost:8080/api/budgets/${userId}`, { budget}).then(res => { 
        
        dispatch({ type: "createBudgets", userId:userId, budget: budget});
    })
    }
   
        
  


    return {state,createBudget};
    
}