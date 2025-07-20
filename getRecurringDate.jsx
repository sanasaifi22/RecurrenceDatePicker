// getRecurringDate.js

function getRecurringDate(year, month, week, dayName) {
  const weekMap = {
    First: 0,
    Second: 1,
    Third: 2,
    Fourth: 3,
    Fifth: 4,
    Last: -1,
  };

  const dayMap = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thr: 4,
    Fri: 5,
    Sat: 6,
  };

  const desiredDay = dayMap[dayName];
  const dates = [];

  const date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    if (date.getDay() === desiredDay) {
      dates.push(new Date(date));
    }
    date.setDate(date.getDate() + 1);
  }

  if (weekMap[week] === -1) {
    return dates[dates.length - 1];
  }

  return dates[weekMap[week]] || null;
}

export default getRecurringDate;
