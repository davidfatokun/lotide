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

const head = function(queue) {
  if (queue.length === 0) {
    return undefined;
  } else { 
  return queue[0];
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");