"use strict"

function convertCtoF(temp) {

    //setup variables for celcius and farenheight
    let celcius = 25;
    let fahrenheit = (celcius * 9 / 5 ) + 32; 
    
    return fahrenheit;
}

console.log(convertCtoF(100) );
console.log(convertCtoF(45) );
console.log(convertCtoF(19) );
console.log(convertCtoF(0) );
console.log(convertCtoF(-7) );
console.log(convertCtoF(-40) );


