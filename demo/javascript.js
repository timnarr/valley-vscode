'use strict'

import _ from 'lodash';
const contrast = require('get-contrast');

const string = 'the quick brown fox jumps over the lazy dog';
const number = 123; // in meter
const bool = true; // in meter

const favMountains = [
  {
   name: 'Mount Everest',
   height: 8848,
   heighestMountain: true,
  },
  {
   name: 'Mount Fuji',
   height: 3776.24,
   heighestMountain: false,
 }
];

const mountains = [
  ...favMountains,
  ...otherMountains
];

for (var i = 0; i < favMountains.length; i++) {
  console.log(`One of my favourite Mountains is ${favMountains[i].name}`)
}

const mySet = new Set([1, 2, 3]);

function aspectRatio(x, y) {
  return y * x / 100;
}

const ratio = aspectRatio(16, 9);

console.log('Output ratio', ratio);

/**
 * Calculate contrast ratios
 * @param {Number} colorA
 * @param {Number} colorB
 * @returns {Object}
 */
const checkContrastRatio = (colorA, colorB) => {
  const ratio = contrast.ratio(colorA, colorB)
  let visualScore;

  if (ratio >= 4.5) {
    visualScore = '✅ passed'
  } else if (ratio >= 3) {
    visualScore = '🚨 acceptable'
  } else {
    visualScore = '💩 failed'
  }

  return visualScore;
};

// ES6 Class example by Samantha Ming
// https://www.samanthaming.com/tidbits/39-es6-classes/
class Halloween {
  constructor(costume) {
    this.costume = costume;
  }

  // Prototype Method
  boo() {
    return 'Happy Halloween 🎃'
  }

  // Static Method
  static trickOrTreat() {
    return '🍬🍬🍬'
  }
}

const zombie = new Halloween('zombieCostume');

zombie.boo()


// JavaScript Assignment Operators
x = y
x += y
x -= y
x *= y
x /= y
x %= y
x **= y
