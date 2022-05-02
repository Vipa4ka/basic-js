const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }
const nnn = [];
  const res = [];
  

  if (!options.separator) {options.separator = '+';}

  if (options.hasOwnProperty('addition')) {
    if (typeof options.addition != 'string') {
      options.addition = String(options.addition);
    }
    if (!options.additionSeparator) {
      options.additionSeparator = '|';}
    for (let j = 0; j < options.additionRepeatTimes - 1; j += 1) {
      nnn.push(options.addition);
      nnn.push(options.additionSeparator);
    }
    nnn.push(options.addition);
    nnn.push(str);
    str = nnn.reverse().join('');
  }

  for (let i = 0; i < options.repeatTimes - 1; i += 1) {
    res.push(str);
    res.push(options.separator);
  }
  res.push(str);

  return res.join('');
}

module.exports = {
  repeater
};
