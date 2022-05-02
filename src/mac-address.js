const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const aaa = '0123456789ABCDEF';
  const res = n.split('-').map(element => {
    if (element.length !== 2) { element = 'false'; }
    else if (aaa.includes(element[0]) && aaa.includes(element[1])) {
      element = 'true';
    } else {
      element = 'false'
    }
    return element;
  });
  return res.includes('false') ? false : true;
}
module.exports = {
  isMAC48Address
};
