const assertEqual = function(actual, expected) {
  let result = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    result = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  console.log(result);
};

const eqArrays = function(first, second) {
  let result = true;
  for (let i = 0; i < first.length; i++) {
    if (!(first[i] === second[i])) {
      result = false;
    }
  }
  return result;
};

const assertEqualArrays = function(first, second) {
  let result = `✅✅✅ Assertion Passed: ${first} === ${second}`;
  for (let i = 0; i < first.length; i++) {
    if (!(first[i] === second[i])) {
      result = `🛑🛑🛑 Assertion Failed: ${first} !== ${second}`;
    }
  }
  console.log(result);
};

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
assertEqualArrays(middle([1]), [])
assertEqualArrays(middle([1,2]), [])
assertEqualArrays(middle([1,2,3]), [2])
assertEqualArrays(middle([1,2,3,4,5]), [3])
assertEqualArrays(middle([1, 2, 3, 4]), [2, 3])
assertEqualArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])

assertEqual(eqArrays(middle([1]), []), true)
assertEqual(eqArrays(middle([1,2]), []), true)
assertEqual(eqArrays(middle([1,2,3]), [2]), true)
assertEqual(eqArrays(middle([1,2,3,4,5]), [3]), true)
assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true)
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true)
