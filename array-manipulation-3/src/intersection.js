/* eslint-disable no-unused-vars */

const intersection = (first, second) => {
  const result = [];
  first.forEach(el => {
    if (second.indexOf(el) !== -1) {
      result.push(el);
    }
  });
  return result;
};


