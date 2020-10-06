/* eslint-disable no-unused-vars */
function compact(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const falsy = Boolean(array[i]);

    if (falsy === true) {
      result.push(array[i]);
    }
  }
  return result;
}
