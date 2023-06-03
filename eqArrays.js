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

const eqArrays = function(first, second) {
    let result = true;
    for (let i = 0; i < first.length; i++) {
        if (!(first[i] === second[i])) {
            result = false;
        }
    }
    return result;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
