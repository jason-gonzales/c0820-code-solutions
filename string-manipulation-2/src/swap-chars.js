/* eslint-disable no-unused-vars */
const swapChars = (firstIndex, secondIndex, string) => {
  let result = '';
  const firstLetter = string[firstIndex];
  const secondLetter = string[secondIndex];
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += secondLetter;
    } else if (i === secondIndex) {
      result += firstLetter;
    } else {
      result += string[i];

    }
  }
  return result;
};
