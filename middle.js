const middle = function(arr){
  if(arr.length < 3) return []
  let newArray = arr.sort();
  let result = []
  if (arr.length % 2 === 0) {
    result.push(newArray[(arr.length / 2) - 1]);
    result.push(newArray[arr.length / 2]);
  } else {
    result.push(newArray[Math.floor(arr.length / 2)]);
  }
  return result;
}

module.exports = middle;
