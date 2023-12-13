function isOddEven(number){
    if (number % 2 == 0){
        return "Yes"
    }
    else{
        return "No"
    }    
}

const inpNumber = prompt("Enter a number:");
console.log(isLeapYear(inpNumber));
