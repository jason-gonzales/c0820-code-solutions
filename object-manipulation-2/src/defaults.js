/* eslint-disable no-unused-vars */
const defaults = (target, source) => {
  for (const prop in source) {
    if (target[prop] === undefined) {
      target[prop] = source[prop];
    }
  }
};

// run a for in loop to access the property of source object
// make an if statement saying that if value of target[key] is undefined
// then value of target object is equal to value of source object
