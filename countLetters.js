const assertEqual = function(actual, expected) {
    let result = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    if (actual === expected) {
        result = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
    }
    console.log(result);
};

const countLetters = function(word) {
    let result = {}
    for (let letter of word) {
        if (result[letter.toLowerCase()] === undefined) {
            result[letter.toLowerCase()] = 1;
        } else {
            result[letter.toLowerCase()]++;
        }
    }
    return result;
};
assertEqual(countLetters('Lhl')['l'], 2);
assertEqual(countLetters('Lhl')['h'], 1);
