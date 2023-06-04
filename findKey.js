const assertEqual = function (actual, expected) {
    let result = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    if (actual === expected) {
        result = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    }
    console.log(result);
};
const findKey = function (object, callback) {
    let results = undefined;
    let keys = Object.keys(object);
    for (let key of keys) {
        if (callback(object[key])) {
            results = key;
            break;
        }
    }
    return results;
}

assertEqual(
    findKey({
        "Blue Hill": {stars: 1},
        "Akaleri": {stars: 3},
        "noma": {stars: 2},
        "elBulli": {stars: 3},
        "Ora": {stars: 2},
        "Akelarre": {stars: 3}
    }, x => x.stars === 2),
    "noma")
