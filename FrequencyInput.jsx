import { useState } from "react"

const FrequencyInput = ({ days}) => {
    const[number,setnumber]=useState("");
     const[unitNumber,unitSetNumber]=useState('');
    const handleNumberChange=(event)=>{
        setnumber(event.target.value);
    }
    const handleUnitChange=(event)=>{
        unitSetNumber(event.target.value);
    }
    const handleSubmit=()=>{
        console.log(`Every ${number}${unitNumber}`)
    }
  return (
    <>

    <input type="number" placeholder="Enter Number"
     onChange={handleNumberChange}/>
<h1>recurrence number</h1>
            <select name={days} onChange={handleUnitChange}>
        <option value="">--Select--</option>
        <option value="Daily">Days</option>
        <option value="Weekly">Week</option>
        <option value="Monthly">Month</option>
        <option value="yearly">year</option>
      </select>
      <button onClick={handleSubmit}>Confirm</button>
    </>
  )
}

export default FrequencyInput
