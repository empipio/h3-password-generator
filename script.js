//generate password

//symbols

//letters uppercase

//letters lowercase

//numbers

//choose password length 8-128 characters

/*

do i want symbols true/false

do i want lowercase true/false

do i want uppercase true/false

do i want numbers true/false

*/

//assemble password

//random choice

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var numbers = "1234567890";

var symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;



//Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 

  var passwordLength = window.prompt("Select number of characters, 8-128");

  if (passwordLength <8) {
    return;
  }

  if (passwordLength >128) {
    return;
  }

  var selectUpper = window.confirm("Would you like to include uppercase letters?");

  var selectLower = window.confirm("Would you like to include lowercase letters?");

  var selectNumbers = window.confirm("Would you like to include numbers?");

  var selectSymbols = window.confirm("Would you like to include special characters?");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
