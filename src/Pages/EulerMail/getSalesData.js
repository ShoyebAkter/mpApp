export const getSalesData = (totalSales,salesValue) => {
    totalSales.map((sale) => {
      const day = new Date(sale.sale.$date.$numberLong * 1000).getDate();
      const month = new Date(sale.sale.$date.$numberLong * 1000).getMonth();
      const year = new Date(sale.sale.$date.$numberLong * 1000).getFullYear();

      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;
      const date = `${formattedMonth}/${formattedDay}/${year}`;
      const sales = sale.items.map((item) => {
        const price = item.price.$numberDecimal;
        const quantity = item.quantity.$numberInt;
        const totalPrice = parseInt(price) * parseInt(quantity);
        return totalPrice;
      });
      let sum = 0;
      for (let i = 0; i < sales.length; i++) {
        sum = sum + sales[i];
      }

      const obj = {
        date: date,
        total: sum,
      };
      salesValue.push(obj);
    });
  };

export const callApi=(api,setTotalSales)=>{
    fetch(api)
      .then((res) => res.json())
      .then((result) => setTotalSales(result))
      .catch((error) => console.error(error));
}
export const changeArrayValue = (salesValue,resultArray) => {
    //    console.log(resultArray)
    salesValue.forEach((obj) => {
        // console.log(new Date( obj.date).getFullYear())
        // Check if an object with the same 'id' property exists in the result array
        const existingObject = resultArray.find((item) =>item.year ===new Date( obj.date).getFullYear());

        if (existingObject) {
            // If it exists, add the 'value' property
            existingObject.total += obj.total;
        } else {
            // If it doesn't exist, create a new entry in the result array
            resultArray.push({ year: new Date( obj.date).getFullYear(), total: obj.total });
        }
    });
    resultArray.sort((a, b) => a.year - b.year);
    // console.log(resultArray)
    return resultArray;
    
}