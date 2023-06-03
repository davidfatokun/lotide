const assertEqual = function(actual, expected) {
    let result = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    if (actual === expected) {
        result = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    }
    console.log(result);
};

const eqArrays = function(first, second) {
    let result = true;
    for (let i = 0; i < first.length; i++) {
        if (!(first[i] === second[i])) {
            result = false;
        }
    }
    return result;
};

const eqObjects = function(object1, object2) {
    let result = true;
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);

    for (const key of keys1) {
        if(object2[key] === undefined || (object2[key] instanceof Array && !eqArrays(object1[key],object2[key]))){
            result = false;
        } else if(object2[key] === undefined || (!(object2[key] instanceof Array) && object1[key] !== object2[key])){
            result = false;
        }
    }

    for (const key of keys2) {
        if(object1[key] === undefined || (object1[key] instanceof Array && !eqArrays(object1[key],object2[key]))){
            result = false;
        } else if(object1[key] === undefined || (!(object1[key] instanceof Array) && object1[key] !== object2[key])){
            result = false;
        }
    }

    return result;
};


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
