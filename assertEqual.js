// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    result = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  console.log(result);
};

module.exports = assertEqual;
