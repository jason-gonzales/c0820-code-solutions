/* eslint-disable no-unused-vars */
const zip = (first, second) => {
  const result = [];
  let array = null;
  if (first.length <= second.length) {
    array = first;
  } else {
    array = second;
  }
  for (let i = 0; i < array.length; i++) {
    result.push([first[i], second[i]]);
  }
  return result;
};
