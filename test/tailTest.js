const assert = require('chai').assert;
const index   = require('../index');

describe("#tail", () => {
    it("returns [\"Lighthouse\", \"Labs\"] for [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
        // Test Case: Check the original array
        const words = ["Yo Yo", "Lighthouse", "Labs"];
        assert.deepEqual(index.tail(words), ["Lighthouse", "Labs"]);
    });
});
