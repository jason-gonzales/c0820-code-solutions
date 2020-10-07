/* eslint-disable no-unused-vars */
const pick = (source, keys) => {
  const result = {};
  for (let i = 0; i < keys.length; i++) {

    if (source[keys[i]] !== undefined) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;

};
