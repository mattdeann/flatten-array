const chai = require('chai');
const expect = chai.expect;
const flattenArray = require('../src/flattenArray');

describe('flattenArray', function() {
  it('should flatten an array without nesting', function() {
    const array1 = ["one", "two", "three", "four"];
    expect(flattenArray(array1)).to.deep.equal(["one", "two", "three", "four"]);
  })

  it('should flatten an array with one level of nesting', function() {
    const array2 = [["one", "two"], "three", "four"];
    expect(flattenArray(array2)).to.deep.equal(["one", "two", "three", "four"]);
  })

  it('should flatten an array with many level of nesting', function() {
    const array3 = [[[["one", ["two"]]]], [[[["three"]]], "four"]];
    expect(flattenArray(array3)).to.deep.equal(["one", "two", "three", "four"]);
  })
})