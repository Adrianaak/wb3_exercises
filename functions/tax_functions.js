"use strict"



function getSocSecTax(grossPay) {
    let withheldAmount = grosspay * (6.2 / 100);
    return withheldAmount;
}

function getMedicareTax(grossPay) {
    let withheldAmount = grosspay * (1.45 / 100);
    return withheldAmount;

}

//take in gross pay and tax code
function getFederalTax(grossPay, code) {
    if (code === 0) {
        taxRate = 23 / 100;
    }
    else if (code === 1) {
        taxRate = 21 / 100;
    }
    else if (code === 2) {
        taxRate = 19.5 / 100;
    }
    else if (code === 3) {
        taxRate = 18.5 / 100;
    }
    
}
 
 
 
 // gross pay amount const socSecTax = getSocSecTax(grossPay); 
 const medicareTax = getMedicareTax(grossPay); 
 const federalTax = getFederalTax(grossPay); 
 
 console.log("Social Security Tax:", socSecTax); 
 console.log("Medicare Tax:", medicareTax);
 console.log("Federal Tax:", federalTax);

