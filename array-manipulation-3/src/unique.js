/* eslint-disable no-unused-vars */

const unique = array => {
  const result = [];
  array.forEach((el, index) => {
    if (array.indexOf(el) === index) {
      result.push(el);
    }
  });
  return result;
};

