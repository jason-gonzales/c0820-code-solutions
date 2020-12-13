/* eslint-disable no-unused-vars */
const difference = (first, second) => {
  const result = [];
  first.forEach(el => {
    if (second.indexOf(el) === -1) {
      result.push(el);
    }
  });

  second.forEach(el => {
    if (first.indexOf(el) === -1) {
      result.push(el);
    }
  });
  return result;
};
