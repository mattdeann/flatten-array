const chai = require('chai');
const expect = chai.expect;
const flattenArray = require('../src/flattenArray');

describe('flattenArray', function() {
  it('should flatten an array of strings without nesting', function() {
    const array1 = ["one", "two", "three", "four"];
    expect(flattenArray(array1)).to.deep.equal(["one", "two", "three", "four"]);
  })

  it('should flatten an array of strings with one level of nesting', function() {
    const array2 = [["two", "two"], "three", "four"];
    expect(flattenArray(array2)).to.deep.equal(["two", "two", "three", "four"]);
  })

  it('should flatten an array of strings with many level of nesting', function() {
    const array3 = [[[["three", ["two"]]]], [[[["three"]]], "four"]];
    expect(flattenArray(array3)).to.deep.equal(["three", "two", "three", "four"]);
  })

  it('should flatten an array of numbers', function() {
    const array4 = [[[[1, [2]]]], [[[[3]]], 4]];
    expect(flattenArray(array4)).to.deep.equal([1, 2, 3, 4]);
  })
})