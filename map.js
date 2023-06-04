const assertEqualArrays = function(first, second) {
    let result = `✅✅✅ Assertion Passed: ${first} === ${second}`;
    for (let i = 0; i < first.length; i++) {
        if (!(first[i] === second[i])) {
            result = `🛑🛑🛑 Assertion Failed: ${first} !== ${second}`;
        }
    }
    console.log(result);
};

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertEqualArrays(results1, ['g','c','t','m','t']);
