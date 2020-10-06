/* eslint-disable no-unused-vars */
const capitalizeWords = string => {
  const result = [];
  const lower = string.toLowerCase();
  const split = lower.split(' ');
  for (let i = 0; i < split.length; i++) {
    result.push(split[i].charAt(0).toUpperCase() + split[i].slice(1));

  }
  return result.join(' ');
};
