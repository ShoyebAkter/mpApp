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

export const callApi = async (url, setData) => {
  try {
    console.log("Calling API at:", url);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response:", response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);

    setData(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

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

export const linearRegression=(data)=>{
  // console.log(data)
  const clean_data = data
    .filter(({ x, y }) => {
      return (
        typeof x === typeof y &&  // filter out one string & one number
        !isNaN(x) &&              // filter out `NaN`
        !isNaN(y) &&
        Math.abs(x) !== Infinity && 
        Math.abs(y) !== Infinity
      );
    })
    .map(({ x, y }) => {
      return [x, y];             // we need a list of [[x1, y1], [x2, y2], ...]
    });
    return clean_data;
}

export const updateValue=(value,setTotalSales)=>{
  const updatedSalesValue = value.map(sale => {
    if (sale.total >= 1000) {
      // console.log(sale.total)
      return {
        ...sale,
        total: (sale.total / 1000).toFixed(1) + 'k'
      };
    } else {
      return sale;
    }
  });
  setTotalSales(updatedSalesValue)
}