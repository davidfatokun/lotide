// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    result = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  console.log(result);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = function(queue) {
  let result = []
  if(queue.length < 2) return result;
  for (let i = 1; i < queue.length; i++) {
    result.push(queue[i]);
    assertEqual(result[i-1], queue[i])
  }
  return result;
};


// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!