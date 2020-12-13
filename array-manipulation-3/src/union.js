/* eslint-disable no-unused-vars */

const union = (first, second) => {
  const result = first;
  second.forEach(el => {
    if (first.indexOf(el) === -1) {
      result.push(el);
    }
  });
  return result;
};


