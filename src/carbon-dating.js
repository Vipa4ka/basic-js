const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let answer = false;

  if (typeof(sampleActivity) === 'string'){
      let num = parseFloat(sampleActivity);

      if (num < MODERN_ACTIVITY && num > 0){
          const t = Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD);
          answer = Math.ceil(t);
      }
  }
  return answer;
}

module.exports = {
  dateSample
};
