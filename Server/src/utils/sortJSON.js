export default function sortJsonByKeys(keyArray, jsonArray) {
  let resultArr = [];
  const key = keyArray[0];

  let uniqueValueArr = [];

  for (const jsonObj of jsonArray) {
    const value = jsonObj[key];
    if (!uniqueValueArr.includes(value)) {
      uniqueValueArr.push(value);
    }
  };

  uniqueValueArr = uniqueValueArr.sort();

  for (const value of uniqueValueArr) {
    let matchingJsonArr = [];

    for (const obj of jsonArray) {
      if (obj[key] === value) {
        matchingJsonArr.push(obj);
      }
    }

    if (keyArray.length > 1) {
      resultArr =  resultArr.concat(
        sortJsonByKeys(keyArray.slice(1), matchingJsonArr)
      );
    } else {
      resultArr = resultArr.concat(matchingJsonArr);
    }
  };

  return resultArr;
}