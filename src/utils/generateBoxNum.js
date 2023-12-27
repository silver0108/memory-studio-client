export default function generateBoxNum (currentYear, currentMonth) {
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay(); // 0-indexed, where 0 is Sunday

  const totalDaysWithPadding = daysInMonth + firstDayOfMonth; // Including days before the first day of the month
  const totalRows = Math.ceil(totalDaysWithPadding / 7);

  let numbers = [];
  let dayCounter = 1;

  for (let i = 0; i < totalRows; i++) {
    let row = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        row.push(null);
      } else if (dayCounter <= daysInMonth) {
        row.push(dayCounter++);
      } else {
        row.push(null);
      }
    }
    numbers.push(row);
  }

  return numbers;
};