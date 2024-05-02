"use strict"

function parseAndDisplayName(fullName) {
    // Splitting the full name into parts
    let names = fullName.split(" ");
    
    // Displaying the information
    console.log("Name:", fullName);
    console.log("Only name:", names[0]);
    console.log("First name:", names[0]);
    if (names.length > 1) {
        console.log("Last name:", names[names.length - 1]);
    }
    
    
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");

