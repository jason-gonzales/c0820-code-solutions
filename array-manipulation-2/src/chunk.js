/* eslint-disable no-unused-vars */
const chunk = (array, size) => {
  const result = [];
  for (const value of array) {
    const last = result[result.length - 1];
    if (!last || last.length === size) {
      result.push([value]);
    } else {
      last.push(value);

    }
  }
  return result;
};
