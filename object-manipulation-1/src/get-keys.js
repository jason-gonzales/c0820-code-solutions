/* eslint-disable no-unused-vars */
const getKeys = object => {
  const result = [];
  for (const prop in object) {
    result.push(prop);
  }
  return result;
};
