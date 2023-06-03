const assertEqual = function(actual, expected) {
    let result = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    if (actual === expected) {
        result = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    }
    console.log(result);
};

const countOnly = function(allItems, itemsToCount) {
    let newObj = {}
    for (let item of allItems) {
        newObj[item] = undefined;
    }
    for (let item of allItems) {
        if(itemsToCount[item] && newObj[item] == undefined){
            newObj[item] = 1;
        } else if(itemsToCount[item] && newObj[item] !== undefined){
            newObj[item] = newObj[item] + 1;
        }
    }
    return newObj;
}

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
