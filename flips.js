// Import the coinFlip function from your coin.mjs file

import {coinFlip, countFlips, coinFlips} from './modules/coin.mjs'

// Call the coinFlip function and put the return into STDOUT

import minimist from "minimist";

const argv = (minimist)(process.argv.slice(2));
argv['number'];

const numflips = argv.number || 1;

var array = coinFlips(numflips);

console.log(array);
console.log(countFlips(array))