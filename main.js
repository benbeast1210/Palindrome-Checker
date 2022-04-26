const palindrome = str => {
// This regex checks if the input string contains any invalid characters and return the matching characters
  const alphanumericOnly = str
    .toLowerCase()
    .match(/[a-z0-9]/g);
// Then, the checked array is reversed, and checked against its counterpart to return a boolean    
  return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');
};
