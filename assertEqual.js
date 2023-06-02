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