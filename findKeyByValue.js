const assertEqual = function(actual, expected) {
    let result = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    if (actual === expected) {
        result = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    }
    console.log(result);
};

const findKeyByValue = function(object, value) {
    let result = undefined
    let keys = Object.keys(object);
    for (let key of keys) {
        if (object[key] === value){
            result = key;
        }
    }
    return result;
};

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
