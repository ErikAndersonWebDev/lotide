const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  it("returns '5' for ['3', '4,', '5']", () => {
    assert.strictEqual(tail(['3', '4,', '5']), '5'); 
  });
});