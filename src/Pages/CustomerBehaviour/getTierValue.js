export const getTierValue = (array, secondArray) => {
  array.map((customer) => {
    Object.keys(customer.tier_and_details).forEach((objKey) => {
      const innerObject = customer.tier_and_details[objKey];
      secondArray.push(innerObject.tier);
      // Object.keys(innerObject).forEach((innerKey) => {
      //   const innerValue = innerObject[innerKey];
      // //   console.log(`  Inner Key: ${innerKey}, Inner Value: ${innerValue}`);
      // });
    });
  })

}
const convertYearMonthToFullDate = (yearMonth) => {
  const parts = yearMonth.split('-');
  if (parts.length === 2) {
    const year = parts[0];
    const month = parseInt(parts[1], 10);

    if (month >= 1 && month <= 12) {
      const monthName = new Date(Date.UTC(year, month - 1, 1)).toLocaleString('default', { month: 'long' });
      return year + ' ' + monthName;
    }
  }

  // Return the original input if it's not a valid year-month format
  return yearMonth;
}
export const objtoArray = (yearMonthObject) => {
  const resultArray = [];

  for (const key in yearMonthObject) {
    if (yearMonthObject.hasOwnProperty(key)) {
      const date = key;
      const newDate=convertYearMonthToFullDate(date)
      const value = yearMonthObject[key];
      resultArray.push({ newDate, value });
    }
  }
  return resultArray;
}
export const getfourWeeksData=(arrayOfObjects)=>{
  const currentDate = new Date();

// Calculate the date 5 weeks ago
const fourWeeksAgo = new Date();
fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 7 * 4);

// Filter objects within the last 5 weeks
const filteredObjects = arrayOfObjects.filter(obj => {
  const endTime = new Date(obj.end_time);
  return endTime >= fourWeeksAgo && endTime <= currentDate;
});
return filteredObjects;
}
