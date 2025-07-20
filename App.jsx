import Container from "./Container"
import FrequencyInput from "./FrequencyInput"
import GetDateForRecurring from "./GetDateForRecurring"
import MonthlyPattern from "./MonthlyPattern"
import RecurrenceSelector from "./RecurrenceSelector"
import WeekdaysCheckbox from "./WeekdaysCheckbox"
function App(){
  
 return(
  <Container>
        <h2>Recurrence date picker</h2>
      <RecurrenceSelector section="recurrence selection"></RecurrenceSelector>
        <FrequencyInput></FrequencyInput>
       <WeekdaysCheckbox ></WeekdaysCheckbox>
        <MonthlyPattern></MonthlyPattern>
        <GetDateForRecurring />

    </Container>
 )
    
}
    
  


export default App


