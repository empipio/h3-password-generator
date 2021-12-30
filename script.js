//generate password

//symbols /

//letters uppercase /

//letters lowercase /

//numbers /

//choose password length 8-128 characters /

/*

do i want symbols true/false

do i want lowercase true/false

do i want uppercase true/false

do i want numbers true/false

*/

//assemble password /

//random choice /

// prompt if nothing selected

// some way of ensuring one of each criteria has been added to the password

//Assignment Code


//arrays to pick from according to criteria selected by user
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var symbols = [
  "/",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "\\",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  ";",
  "'",
  ":",
  '"',
  "|",
  ",",
  ".",
  "<",
  ">",
  "?",
  "+",
];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = window.prompt("Select number of characters, 8-128");

  //function will only run when between 8 and 128 characters long
  if (passwordLength < 8) {
    return;
  }

  if (passwordLength > 128) {
    return;
  }

  //users select crieteria they would like to use in the password
  var selectUpper = window.confirm(
    "Would you like to include uppercase letters?"
  );

  var selectLower = window.confirm(
    "Would you like to include lowercase letters?"
  );

  var selectNumbers = window.confirm(
    "Would you like to include numbers?"
  );

  var selectSymbols = window.confirm(
    "Would you like to include special characters?"
  );

  //alert if no criteria selected
  if (!selectUpper && !selectLower && !selectNumbers && !selectSymbols) {
    window.alert("Please choose at least one criteria");
  }

  //empty array in which to add criteria selected by user
  var charactersUsed = [];

  //concatenation of arrays according to criteria selected by user
  if (selectUpper) {
    charactersUsed = charactersUsed.concat(upperCase);
  }

  if (selectLower) {
    charactersUsed = charactersUsed.concat(lowerCase);
  }

  if (selectNumbers) {
    charactersUsed = charactersUsed.concat(numbers);
  }

  if (selectSymbols) {
    charactersUsed = charactersUsed.concat(symbols);
  }

  //empty string where password will be generated
  var password = "";

  //for loop to randomly generate password
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charactersUsed.length);
    var randomCharacter = charactersUsed[randomIndex];
    password = password + randomCharacter;
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //display password in window.alert
  window.alert("here is your password: " + password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
