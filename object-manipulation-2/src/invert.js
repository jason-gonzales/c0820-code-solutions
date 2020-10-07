/* eslint-disable no-unused-vars */
const invert = source => {
  const result = {};
  for (const prop in source) {
    result[source[prop]] = prop;
  }
  return result;
};
