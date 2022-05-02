const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(unReverse = true) {
    this.unReverse = unReverse
  }

  getAlph () {
    const alph = [];
    for (let i = 65; i <= 90; i++) {
      alph.push(String.fromCharCode(i))
    }
    return alph;
  }

  alph = this.getAlph();

  getSq() {
    let alph = this.alph;
    const sq = [];
    for (let i = 0; i < 26; i++) {
      sq.push(alph)
      alph = alph.slice(1).concat(alph.slice(0, 1));
    }
    return sq
  }

  sq = this.getSq();

  encrypt(a, b) {

    if (!a || !b) {
      throw new Error(`Incorrect arguments!`)
    }


    const sq = this.sq;
    const alph = this.alph;
   
    const repeat = Math.ceil(a.length / b.length)
    const key = b.repeat(repeat).toUpperCase().split('')
    const mes = a.toUpperCase().split('')
    const res = [];
    let ind = 0;
    
    

    for (let i = 0; i < mes.length; i++) {
      if (!alph.includes(mes[i])) {
        res.push(mes[i])
      } else {
        let b = alph.indexOf(mes[i])
        let j = alph.indexOf(key[ind])
        res.push(sq[b][j])
        ind++
      }
    }

    return this.unReverse ? res.join('') : res.reverse().join('')
  }

  decrypt(a, b) {

    if (!a|| !b) {
      throw new Error(`Incorrect arguments!`)
    }

    const alph = this.alph;
    const sq = this.sq;
    const repeat = Math.ceil(a.length / b.length);
    const key = b.repeat(repeat).toUpperCase().split('');
    const mes = a.toUpperCase().split('');
    const res = [];
    let ind = 0;

    for (let i = 0; i < mes.length; i++) {
      if (!alph.includes(mes[i])) {
        res.push(mes[i])
      } else {
        let b = alph.indexOf(key[ind])
        let j = sq[b].indexOf(mes[i])
        res.push(alph[j])
        ind++
      }
    }
    
    return this.unReverse ? res.join('') : res.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
