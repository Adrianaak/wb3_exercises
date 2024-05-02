"use strict"

function parseAndDisplayName(someName){



//create a variable to hold the first name
let fullName = "Star Smith";

//find the position of the first space
let spacePosition = fullName.indexOf(" ");

//for the first name we start at position 0 and go to the space,
//since it does not include the character in the last position, we get the first name
let firsName = fullName.substring(0, spacePosition);

//
let lastName = fullName.substring(spacePosition + 1);

// use the console.log to display the information to the user in the console
console.log(firsName, lastName);
}

parseAndDisplayName("Star");
parseAndDisplayName("Smith");