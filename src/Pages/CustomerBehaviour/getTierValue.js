export const getTierValue = (array,secondArray) => {
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