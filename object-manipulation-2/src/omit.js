/* eslint-disable no-unused-vars */

const omit = (source, keys) => {
  const newObj = {};
  const sourceKey = Object.keys(source);
  for (let i = 0; i < sourceKey.length; i++) {
    if (!keys.includes(sourceKey[i])) {
      newObj[sourceKey[i]] = source[sourceKey[i]];
    }
  }
  return newObj;
};

// create a new empty object
// access the properties in the source and place
// in a variable
// go through the new variable which is an array
// find out if value keys does not include in the array
// if it doesnt then the new object keys is same as
// source keys
