"use strict"

function displayMailingLabel(name, address, city, state, zip) {

    console.log(name);
    console.log(address);
    console.log(`${city}, ${state} ${zip}`);


    //this is how you would do this with string concatenation
    // console.log(city + "," + state " " + zip);

}

//use the above functions
displayMailingLabel("Adriana", "1234 salmon st", "Fort Myers Beach", "FL", "12345");