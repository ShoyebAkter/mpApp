import natural from "natural";

const findSimilarProperties=(array, targetProperties)=> {
    const resultArray = [];
    const similarityThreshold = 0.8; 
    for (const obj of array) {
        const matchingProperties = {};

        for (const key in obj) {
            for (const target of targetProperties) {
                const similarity = natural.JaroWinklerDistance(key, target);
                if (similarity >= similarityThreshold) {
                    matchingProperties[target] = obj[key];
                    break;
                }
            }
        }

        if (Object.keys(matchingProperties).length > 0) {
            resultArray.push(matchingProperties);
        }
    }

    return resultArray;
}
export default findSimilarProperties;