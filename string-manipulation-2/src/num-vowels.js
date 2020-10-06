/* eslint-disable no-unused-vars */
const numVowels = string => {
  let result = 0;
  const lower = string.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    if (lower[i] === 'a' || lower[i] === 'e' || lower[i] === 'i' || lower[i] === 'o' || lower[i] === 'u') {
      result += 1;
    }
  }
  return result;
};
