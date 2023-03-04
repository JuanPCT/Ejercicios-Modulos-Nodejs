
const countLetters = (string) => {
    const cleanString = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const count = {};
  
    for (let i = 0; i < cleanString.length; i++) {
      const letter = cleanString[i];
      count[letter] = count[letter] ? count[letter] + 1 : 1;
    }
  
    return count;
  }
  
  module.exports = countLetters;
  