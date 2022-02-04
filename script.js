//arrays to pick from according to criteria selected by user
const upperCase = [
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

const lowerCase = [
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

const numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

const symbols = [
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

const generateBtn = document.querySelector("#generate");

function generatePassword() {
  const passwordLength = window.prompt("Select number of characters, 8-128");

  //function will only run when between 8 and 128 characters long
  if (passwordLength < 8) {
    window.alert("Please select between 8 and 128 characters");
    return;
  }

  if (passwordLength > 128) {
    window.alert("Please select between 8 and 128 characters");
    return;
  }

  //users select criteria they would like to use in the password
  //ensuring one of each selected character would need to go here:
  const selectUpper = window.confirm(
    "Would you like to include uppercase letters?"
  );

  const selectLower = window.confirm(
    "Would you like to include lowercase letters?"
  );

  const selectNumbers = window.confirm("Would you like to include numbers?");

  const selectSymbols = window.confirm(
    "Would you like to include special characters?"
  );

  //alert if no criteria selected
  if (!selectUpper && !selectLower && !selectNumbers && !selectSymbols) {
    window.alert("Please choose at least one criteria");
  }

  //empty array in which to add criteria selected by user
  let charactersUsed = [];

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
  let password = "";

  //for loop to randomly generate password
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charactersUsed.length);
    const randomCharacter = charactersUsed[randomIndex];
    password = password + randomCharacter;
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();

  const passwordText = document.querySelector("#password");

  passwordText.value = password;

  //display password in window.alert
  window.alert("here is your password: " + password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
