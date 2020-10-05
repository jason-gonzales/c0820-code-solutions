/* eslint-disable no-unused-vars */
function capitalize(word) {
  const lower = word.toLowerCase('');
  const upper = lower.charAt(0).toUpperCase() + lower.slice(1);
  return upper;
}
