const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let rez = {}

  for (let i = 0; i < domains.length; i++) {
    let key = '';
    let local = domains[i].split('.').reverse()

    for (let j = 0; j < local.length; j++) {
      key = key + '.' + local[j];
      if (Object.keys(rez).includes(key)) {
        rez[key] = rez[key] + 1;
      } else {
        rez[key] = 1
      }
    }
  }
    return rez;
  


}

module.exports = {
  getDNSStats
};
