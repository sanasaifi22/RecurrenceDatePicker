import { useState } from "react";
import getRecurringDate from "./getRecurringDate";

function GetDateForRecurring() {
  const [week, setWeek] = useState("First");
  const [day, setDay] = useState("Mon");

  const recurringDate = getRecurringDate(2025, 6, week, day); // July = 6

  return (
    <div>
      <label>
        Week:
        <select value={week} onChange={(e) => setWeek(e.target.value)}>
          <option>First</option>
          <option>Second</option>
          <option>Third</option>
          <option>Fourth</option>
          <option>Fifth</option>
          <option>Last</option>
        </select>
      </label>

      <label>
        Day:
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option>Sun</option>
          <option>Mon</option>
          <option>Tue</option>
          <option>Wed</option>
          <option>Thr</option>
          <option>Fri</option>
          <option>Sat</option>
        </select>
      </label>

      <p>
        Recurring Date:{" "}
        {recurringDate ? recurringDate.toDateString() : "Invalid combination"}
      </p>
    </div>
  );
}

export default GetDateForRecurring;
