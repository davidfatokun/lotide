const assertEqualArrays = function(first, second) {
    let result = `✅✅✅ Assertion Passed: ${first} === ${second}`;
    for (let i = 0; i < first.length; i++) {
        if (!(first[i] === second[i])) {
            result = `🛑🛑🛑 Assertion Failed: ${first} !== ${second}`;
        }
    }
    console.log(result);
};

const letterPositions = function(sentence) {
    const result = {};
    // logic to update results here
    for (let letter of sentence) {
        if (result[letter.toLowerCase()] === undefined) {
            result[letter.toLowerCase()] = [];
        }
    }
    let i = 0;
    for (let letter of sentence) {
        result[letter.toLowerCase()].push(i);
        i++;
    }
    return result;
};
assertEqualArrays(letterPositions('hello')['h'], [0])
assertEqualArrays(letterPositions('hello')['e'], [1])
assertEqualArrays(letterPositions('hello')['l'], [2,3])
assertEqualArrays(letterPositions('hello')['o'], [4])
