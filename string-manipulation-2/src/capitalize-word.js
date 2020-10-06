/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  const lower = word.toLowerCase('');
  let upper = lower.charAt(0).toUpperCase() + lower.slice(1);

  if (upper === 'Javascript') {
    upper = 'JavaScript';
  }

  return upper;
}
