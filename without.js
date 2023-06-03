// FUNCTION IMPLEMENTATION
const assertEqualArrays = function(first, second) {
    let result = `✅✅✅ Assertion Passed: ${first} === ${second}`;
    for (let i = 0; i < first.length; i++) {
        if (!(first[i] === second[i])) {
            result = `🛑🛑🛑 Assertion Failed: ${first} !== ${second}`;
        }
    }
    console.log(result);
};

const without = function(first, second) {
    return first.filter(variable => !second.includes(variable))
};

assertEqualArrays(without([1, 2, 3], [1, "2"]), [2, 3]);
