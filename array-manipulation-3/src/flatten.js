/* eslint-disable no-unused-vars */
const flatten = array => {
  const result = [];
  array.forEach(el => {
    if (Array.isArray(el)) {
      el.forEach(el2 => {
        result.push(el2);
      });
    } else {
      result.push(el);
    }
  });
  return result;
};
