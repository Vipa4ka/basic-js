const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let num = 1;
  let rez = ''
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      num += 1
    } else {
      rez += `${num}${str[i]}`
      num = 1
    }
  }
  return rez.split('1').join('')
}

module.exports = {
  encodeLine
};
