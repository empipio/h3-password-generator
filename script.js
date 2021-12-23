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

var symbols = 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
