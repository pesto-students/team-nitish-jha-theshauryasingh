function isPalindrome(number) {
  orgNumber = number
  revNumber = 0;
  
  while(number !== 0){
      const digit = number % 10;
      revNumber = revNumber * 10 + digit;
      number = Math.floor(number / 10);
      
      // console.log(' --> ', orgNumber, number, revNumber);
  }

  if (revNumber == orgNumber) {
    return "Yes";
  }
  return "No";
  }
const inpNumber = prompt("Enter a number:");
console.log(isPalindrome(inpNumber));

// const number = prompt("Enter a number:");

// let originalNumber = number;
// let reversedNumber = 0;

// while (number !== 0) {
//   const digit = number % 10;
//   reversedNumber = reversedNumber * 10 + digit;
//   number = Math.floor(number / 10);
// }

// const isPalindrome = originalNumber === reversedNumber;

// console.log(`Is ${originalNumber} a palindrome? ${isPalindrome}`);
  