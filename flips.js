// Import the coinFlip function from your coin.mjs file

import {coinFlip, countFlips, coinFlips} from './modules/coin.mjs'

// Call the coinFlip function and put the return into STDOUT

var args = process.argv
const array = []


array = coinFlips(args[3])

console.log(array)
console.log(countFlips(array))