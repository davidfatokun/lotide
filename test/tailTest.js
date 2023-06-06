const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
    it("returns [\"Lighthouse\", \"Labs\"] for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
        // Test Case: Check the original array
        const words = ["Yo Yo", "Lighthouse", "Labs"];
        assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
    });
});
