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


export const getAvg=(Orders)=>{
    const newArray=[];
    Orders.map(order=>{
        const avg=order.total/order.order;
        const obj={
            year:order.year,
            averageTotalPrice:avg
        }
        newArray.push(obj);
    })
    return newArray;
}