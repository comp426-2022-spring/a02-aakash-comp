import {coinFlip, countFlips, coinFlips, flipACoin} from './modules/coin.mjs'

// Call the coinFlip function and put the return into STDOUT

import minimist from "minimist";

const argv = (minimist)(process.argv.slice(2));
argv['call'];
const guess = argv.call

if (guess == "tails"){
    console.log(flipACoin(guess))
}
else if (guess == "heads" ){
    console.log(flipACoin(guess))
    
}
else{
    console.log("Error: no input")
    console.log("Usage: node guess-flip --call=[heads|tails]")
    //yes
}