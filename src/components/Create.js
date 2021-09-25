
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
 
 
  export default function Form(props) {
    const [value, setValue] = React.useState([null, null]);
    const [state, setState] = useState({
         budget_name: "",
         budget_limit: ""
        })
    function handleChange(evt) {
    const value = evt.target.value;
        setState({
               ...state,
               [evt.target.name]: value
              });
    }
    return (
      <form>
        <label>Budget name
        <input  type="text"  name="budgetName"  value={state.firstName}  onChange={handleChange}/>
        </label>
        <label>Budget_Limit 
         <input type="text"  name="budgetLimit" value={state.lastName} onChange={handleChange}
        /></label>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDateRangePicker
             displayStaticWrapperAs="desktop"
               value={value}
                onChange={(newValue) => {
                  setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
          )}
             />
             </LocalizationProvider>
        </form>
    );
  }