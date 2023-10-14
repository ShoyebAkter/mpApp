export const getDuplicate=(arr)=> {
    const countMap = {}; // Object to store counts
    const resultArray = [];

    // Loop through the original array
    for (const value of arr) {
        // Check if the value is already in the countMap
        if (countMap[value] !== undefined) {
            countMap[value]++; // Increment the count
        } else {
            countMap[value] = 1; // Initialize count to 1 for new values
        }
    }

    // Loop through the countMap to create the result array
    for (const value in countMap) {
        if (countMap.hasOwnProperty(value)) {
            resultArray.push({ value: value, count: countMap[value] });
        }
    }

    return resultArray;
}