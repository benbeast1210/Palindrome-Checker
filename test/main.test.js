const expect = require('chai').expect
const { palindrome } = require('../src/main')

describe('palindrome()', () => {
  it('should return an error message if the input is invalid', () => {
    const actual = palindrome('');
    const expected = 'Please enter a valid input.';
    expect(actual).to.equal(expected)
  })
  it('should return true if valid input is a palindrome', () => {
    const actual = palindrome('madam');
    expect(actual).to.be.true
  })
  it('should return false if valid input isn\'t a palindrome', () => {
    const actual = palindrome('palindrome');
    expect(actual).to.be.false
  })
});
