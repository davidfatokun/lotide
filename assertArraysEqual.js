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
