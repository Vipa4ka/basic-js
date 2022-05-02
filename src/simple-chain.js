const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  ch: [],

  getLength() {
    return this.ch.length;
  },

  addLink(value = ' ') {
    this.ch.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof this.ch[position - 1] === 'undefined' || !Number.isInteger(position)) {
      this.ch = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.ch.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.ch.reverse();
    return this;
  },

  finishChain() {
    const res = this.ch.map(el => `( ${el} )`).join('~~');
    this.ch = [];
    return res;
  },
};

module.exports = {
  chainMaker
};
