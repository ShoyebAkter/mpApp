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
customerData.forEach(function(customer) {
    var recencyDays = calculateRecency(customer.created_at, customer.updated_at);
    var frequency = customer.orders_count;
    var monetaryValue = parseFloat(customer.total_spent);

    var customerSegment = segmentCustomer(recencyDays, frequency, monetaryValue);

    // Add the segment to the customer object
    customer['Customer_Segment'] = customerSegment;
});

// Now, customerData array contains the RFM segment for each customer object
console.log(customerData);

}
export const getCustomerSegMentCount=(customerData,setSegmentCount)=>{
    // Assuming customerData is your array of customer objects with 'Customer_Segment' property

// Function to count occurrences of each Customer_Segment value
function countCustomerSegments(customerData) {
    return customerData.reduce(function(acc, curr) {
        // Get the Customer_Segment value
        var segment = curr.Customer_Segment;
        
        // Increment the count for this segment in the accumulator object
        acc[segment] = (acc[segment] || 0) + 1;
        
        return acc;
    }, {});
}

// Call the function to get the count of each Customer_Segment
var segmentCounts = countCustomerSegments(customerData);

// Convert the object to an array of objects for easier manipulation (optional)
var segmentCountArray = Object.keys(segmentCounts).map(function(segment) {
    return { segment: segment, count: segmentCounts[segment] };
});
setSegmentCount(segmentCountArray)
// Now, segmentCountArray contains objects with 'segment' and 'count' properties representing the count of each Customer_Segment

}