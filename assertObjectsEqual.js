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

const assertEqualObjects = function(actual, expected) {
    const inspect = require('util').inspect;
    let result = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
    if (eqObjects(actual, expected)) {
        result = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
    }
    console.log(result);
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqualObjects(multiColorShirtObject  , anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqualObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject);
