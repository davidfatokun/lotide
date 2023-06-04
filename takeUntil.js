const assertEqualArrays = function(first, second) {
    let result = `✅✅✅ Assertion Passed: ${first} === ${second}`;
    for (let i = 0; i < first.length; i++) {
        if (!(first[i] === second[i])) {
            result = `🛑🛑🛑 Assertion Failed: ${first} !== ${second}`;
        }
    }
    console.log(result);
};

const takeUntil = function(array, callback) {
    const results = [];
    for (let item of array) {
        if(!callback(item)){
            results.push(item)
        } else {
            break;
        }
    }
    return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertEqualArrays(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertEqualArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
