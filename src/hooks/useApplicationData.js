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
        username: null,
        budgets:{}
      });
      
    useEffect(()=>{
     axios.get('http://localhost:8080/api/users')
     .then((res) => {
       const username =res.data[3]["first_name"];
       dispatch({
        type: "setData",
        value: {username}
      });
     });
     // eslint-disable-next-line
    },[]);  


    function createBudget(budgetName,budgetLimit,startDate,endDate,userId){
      const budget={
        budgetName:budgetName,
        budgetLimit:budgetLimit,
        startDate: startDate,
        endDate:endDate,
        userId:userId

      };
      return axios.put(`http://localhost:8080/api/budgets/${userId}`, { budget}).then(res => { 
        console.log("budget:::::",budget);
        dispatch({ type: "createBudgets", userId:userId, budget: budget});
    })
    }
   
        
  


    return {state,createBudget};
    
}