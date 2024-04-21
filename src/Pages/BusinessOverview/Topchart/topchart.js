export const getOrdersInfo = (orders,orderData) => {
    orders.map((order) => {
        const date = new Date(order.order_date);
        const year = date.getFullYear();
        const obj = {
            year: year,
            totalPrice: parseInt(order.total_price)
        }
        orderData.push(obj)
    })
}

export const changeArrayValue = (orderData,resultArray) => {

    orderData.forEach((obj) => {
        // Check if an object with the same 'id' property exists in the result array
        const existingObject = resultArray.find((item) => item.year === obj.year);

        if (existingObject) {
            // If it exists, add the 'value' property
            existingObject.totalPrice += obj.totalPrice;
            
        } else {
            // If it doesn't exist, create a new entry in the result array
            resultArray.push({ year: obj.year, totalPrice: obj.totalPrice });
        }
    });
    resultArray.sort((a, b) => a.year - b.year);
    
}


export const getAvg=(totalOrdersData,totalSalesData)=>{
    const mergedArray = totalOrdersData.map(obj1 => {
        const obj2 = totalSalesData.find(obj2 => obj2.year === obj1.year);
        return { ...obj1, ...obj2 };
      });
    const newArray=[];
    mergedArray.map(order=>{
        const avg=order.total/order.orders;
        const obj={
            year:order.year,
            averageTotalPrice:avg
        }
        newArray.push(obj);
    })
    return newArray;
}

export const countDuplicateValues=(newArray) =>{
    const countryCounts = {};

    // Iterate through the users array and count the countries
    for (const user of newArray) {
      const { id } = user;
      if (countryCounts[id]) {
        countryCounts[id]++;
      } else {
        countryCounts[id] = 1;
      }
    }
    // console.log(countryCounts);
    // Loop through the countMap to create the result array
    
    const countryCountsArray = Object.entries(countryCounts).map(([country, count]) => ({
      id: country, // Use the country name as the id
      value: count,
    }));

    return countryCountsArray;
  }