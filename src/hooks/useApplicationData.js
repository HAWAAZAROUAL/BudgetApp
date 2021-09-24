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
        username: null
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
    return {state};
    
}