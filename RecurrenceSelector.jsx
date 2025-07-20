import { useState } from "react";

const RecurrenceSelector = ({ section }) => {
        /* use of usesate*/ 
        const[SelectedValue,setSelectedValue]=useState("");

        /*handle dropdown change*/
        const handleChange = (event) => {
          setSelectedValue(event.target.value);
        }

        /*Handle button clicked */
        const handleClickedoption= () => {
          console.log(`${ section} clicked button`);
          console.log(SelectedValue);
        }
  
  return (
    <>
      <label>Select Recurrence</label>
      <select name={section}onChange={handleChange}>
        <option value="">--Select--</option>
        <option value="Days">Days</option>
        <option value="Week">Week</option>
        <option value="Month">Month</option>
        <option value="year">year</option>
      </select>
      <button className="btn"
      onClick={handleClickedoption}>
        recurrence
      </button>
    </>
  )
};

export default RecurrenceSelector
