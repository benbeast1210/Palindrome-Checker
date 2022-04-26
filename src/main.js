const str = document.getElementById('user-input')
function palindrome(str) {
  if (!str) return "Please enter a valid input."
  // This regex checks if the input string contains any invalid characters and return the matching characters
  const alphanumericOnly = str
    .toLowerCase()
    .match(/[a-z0-9]/g);
  // Then, the checked array is reversed, and checked against its counterpart to return a boolean    
  return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');
}

module.exports = { palindrome };
