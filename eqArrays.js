const eqArrays = function(first, second) {
    let result = true;
    for (let i = 0; i < first.length; i++) {
        if (!(first[i] === second[i])) {
            result = false;
        }
    }
    return result;
};
module.exports = eqArrays;

