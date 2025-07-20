import { useState } from "react";

const MonthlyPattern = () => {
   const Weekdays=['Mon','Tue','Wed','Thr','Fri','Sat','sun'];
  const weeknumber=['First','Second','Third','Fourth','Fifth','Last']

  const[SelectWeek,setSelectweek]=useState("");
  const[SelectWeeknumber,setSelectweekNumber]=useState("");

  const handleSelectweek = (event) => {
    setSelectweek(event.target.value);
}

  const handleWeekNumber = (event) => {
    setSelectweekNumber(event.target.value);
  }

  const handleSubmit = () => {
    console.log(`Selected pattern: ${SelectWeeknumber} ${SelectWeek}`);
  };
 
  return (
    <>
     <h3>Select Monthly Pattern</h3>
     
      {/* Week Number Dropdown */}
      <select onChange={handleWeekNumber}>
          <option value="">--Select Week Number--</option>
          {weeknumber.map((number,idx) => (
            <option key={idx} value={number}>{number}</option>
          ))}
          </select>

             {/* week Dropdown */}
      <select onChange={handleSelectweek}>

          <option value="">--Select Week --</option>
          {Weekdays.map((week,idx) => (
            <option key={idx} value={week}>{week}</option>
          ))}
          
        </select>
       
         <button className="btn"
      onClick={handleSubmit}>
        recurrence
      </button>
    </>
  )
}

export default MonthlyPattern;
