/* eslint-disable no-unused-vars */
const includes = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
};
// go through the array to access the values
