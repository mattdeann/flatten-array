import chai from 'chai';
const expect = chai.expect;
import flattenArray from '../src/flattenArray';

describe('flattenArray', function() {
  

  it('should flatten an array without nesting', function() {
    const array1 = [1, 2, 3, 4];
    expect(flattenArray(array1)).to.deep.equal([1, 2, 3, 4]);
  })
})