const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
export function formatDate(date: string): string {
  try {
    if (!date) {
      throw new Error('Invalid Date');
    }

    const today = new Date();
    const currentTz = today.getTimezoneOffset() / 60;
    const inputDate = new Date(date);
    inputDate.setHours(inputDate.getHours() + currentTz);

    const inputDateYear = inputDate.getFullYear();
    const inputDateMonth = inputDate.getMonth();
    const inputDateDate = inputDate.getDate();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();
    const nextWeek = new Date(today.setDate(today.getDate() + 6));
    // const inputDateDay = days[inputDate.getDay()];
    const inputDateMonthName = months[inputDateMonth];
    const inputDateSuffix = inputDateDate > 3 ? 'th' : inputDateDate === 3 ? 'rd' : inputDateDate === 2 ? 'nd' : 'st';
    const inputDateFormatted = ` ${inputDateDate}${inputDateSuffix} ${inputDateMonthName}`;
    if (inputDateYear === todayYear) {
      if (inputDateMonth === todayMonth && inputDateDate === todayDate) {
        return 'Today';
      } else if (inputDateMonth === todayMonth && inputDateDate === todayDate - 1) {
        return 'Yesterday';
      } else if (inputDateMonth === todayMonth && inputDateDate === todayDate + 1) {
        return 'Tomorrow';
      } else if (inputDate >= today && inputDate <= nextWeek) {
        return inputDateFormatted;
      } else {
        return `${inputDateFormatted} ${inputDateYear}`;
      }
    } else {
      return `${inputDateFormatted} ${inputDateYear}`;
    }
  } catch (e) {
    console.error(e);
    throw new Error('Error in formatDate');
  }
}
export function randomTimestamp() {
  const start = new Date(2020, 0, 1);
  const end = new Date(2021, 0, 1);
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toISOString().split('T')[0];
}
