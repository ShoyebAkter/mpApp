export const fetchData=async(url,setShopifyData)=>{
    await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((res) => res.json())
        .then((result) => setShopifyData(result))
        .catch((error) => console.error(error))
}
export const getShopifyData = async(shopifyData, user) => {
    const dataExists = shopifyData?.some(obj => obj.email === user.email);
    const dataObj=shopifyData?.find(obj => obj.email === user.email)
    // console.log(shopifyData)
    const customersData={
        adminApi: dataObj.adminApi,
         apikey: dataObj.apiKey,
        storeUrl:dataObj.url
    }
    // console.log(customersData)
    const queryParams = new URLSearchParams(customersData).toString();
    
    const postData=async()=>{
        await fetch(`https://emapp-backend.vercel.app/shopify/customersData?${queryParams}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then((result) => console.log(result))
            .catch((error) => console.error(error))
    }
    if(dataExists){
        postData()
    }
  
  }
export const rfmLogic=(moment,customerData)=>{
// Assuming customerData is your array of customer objects

// Function to calculate recency
function calculateRecency(created_at, updated_at) {
    var updatedAt = moment(updated_at);
    var today = moment();
    return today.diff(updatedAt, 'days');
}

// Function to segment the customer based on RFM analysis
function segmentCustomer(recencyDays, frequency) {
    if (recencyDays > 1460) {
        return 'Lost';
    } else if (recencyDays <= 90 && frequency >= 10) {
        return 'Champions';
    } else if (recencyDays <= 180 && frequency >= 5) {
        return 'Loyal Customers';
    } else if (recencyDays <= 365 && frequency >= 3) {
        return 'Potential Loyalist';
    } else if (recencyDays <= 365 && frequency >= 1) {
        return 'Recent Customers';
    } else if (recencyDays <= 180 && frequency >= 2) {
        return 'Promising';
    } else if (recencyDays <= 365) {
        return 'Needing Attention';
    } else if (recencyDays <= 730) {
        return 'About to Sleep';
    } else if (recencyDays <= 1095) {
        return 'At Risk';
    } else if (recencyDays <= 1460) {
        return "Can't Lose";
    } else {
        return 'Lost';
    }
}

// Apply RFM analysis to each customer
customerData?.forEach(function(customer) {
    var recencyDays = calculateRecency(customer.created_at, customer.updated_at);
    var frequency = customer.orders_count;
    var monetaryValue = parseFloat(customer.total_spent);

    var customerSegment = segmentCustomer(recencyDays, frequency, monetaryValue);

    // Add the segment to the customer object
    customer['Customer_Segment'] = customerSegment;
});

// Now, customerData array contains the RFM segment for each customer object
// console.log(customerData);

}
export const getCustomerSegMentCount=async(customerData,setSegmentCount)=>{

    const allSegment=[
        'Champions','Loyal Customers','Potential Loyalist','Recent Customers','Promising',
        'Needing Attention','About to Sleep','At Risk',"Can't Lose",'Lost'
    ]
    // Assuming customerData is your array of customer objects with 'Customer_Segment' property
// console.log(customerData)
// Function to count occurrences of each Customer_Segment value
 function countCustomerSegments (customerData) {
    return customerData?.reduce(function(acc, curr) {
        // Get the Customer_Segment value
        var segment = curr.Customer_Segment;
        
        // Increment the count for this segment in the accumulator object
        acc[segment] = (acc[segment] || 0) + 1;
        
        return acc;
    }, {});
}

// Call the function to get the count of each Customer_Segment
var segmentCounts =await countCustomerSegments(customerData);

// Convert the object to an array of objects for easier manipulation (optional)
var segmentCountArray = Object.keys(segmentCounts).map(function(segment) {
    return { segment: segment, count: segmentCounts[segment] };
});

allSegment.forEach(segment => {
    if (!segmentCountArray.find(item => item.segment === segment)) {
        segmentCountArray.push({ segment: segment, count: 0 });
    }
});
setSegmentCount(segmentCountArray)
// Now, segmentCountArray contains objects with 'segment' and 'count' properties representing the count of each Customer_Segment

}

export const getShopifyYearData=(data)=>{
    function getYearFromDate(dateString) {
        return new Date(dateString).getFullYear();
      }
      
      // Initialize an object to store total spent for each year
      const yearlySpending = [];
      
      // Iterate through the data array
      data.forEach(obj => {
        // Extract the year from created_at
        const year = getYearFromDate(obj.created_at);
      
        // Check if the year already exists in the array
        const index = yearlySpending.findIndex(item => item.year === year);
      
        // If the year exists, add the total spent to its existing value
        // If not, push a new object for that year
        if (index !== -1) {
          yearlySpending[index].total += parseInt(obj.total_spent);
        } else {
          yearlySpending.push({ year: year, total:parseInt( obj.total_spent) });
        }
      });
      return yearlySpending
      
}
export const getShopifyOrders=(data)=>{
    function getYearFromDate(dateString) {
        return new Date(dateString).getFullYear();
      }
      
      // Initialize an array to store yearly orders data
      const yearlyOrders = [];
      
      // Iterate through the data array
      data.forEach(obj => {
        // Extract the year from created_at
        const year = getYearFromDate(obj.created_at);
      
        // Check if the year already exists in the array
        const index = yearlyOrders.findIndex(item => item.year === year);
      
        // If the year exists, add the orders_count to its existing value
        // If not, push a new object for that year
        if (index !== -1) {
          yearlyOrders[index].orders += parseInt(obj.orders_count);
        } else {
          yearlyOrders.push({ year: year, orders:parseInt(obj.orders_count) });
        }
      });
      return yearlyOrders;
}
export const  segmentTotalSpent=(customers)=>{
    const totalSpentBySegment = [];
    
    // Iterate through the array of customers
    customers?.forEach(customer => {
      const { Customer_Segment, total_spent } = customer;
      
      // Check if the customer segment already exists in the array
      const segmentIndex = totalSpentBySegment.findIndex(item => item.segment === Customer_Segment);
      
      if (segmentIndex !== -1) {
        // If the segment exists, add the total spent to its existing total
        totalSpentBySegment[segmentIndex].total += parseInt(total_spent);
      } else {
        // If the segment doesn't exist, add a new entry to the array
        totalSpentBySegment.push({ segment: Customer_Segment, total: parseInt(total_spent) });
      }
      
    });
    return totalSpentBySegment
}