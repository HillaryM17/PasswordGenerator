// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

var passwordLength = 0;
var passwordCharacters;
var upperCaseABC = true;
var lowerCaseABC = true;
var specialChar = true;
var numericChar = true;

// Function to prompt user for password options

function getPasswordOptions() {
  passwordLength = parseInt(
    prompt("Please input desired password length (8-128 characters)")
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number between 8 and 128");
    getPasswordOptions();
  }
  if (isNaN(passwordLength)){
    alert("Please select a number between 8 and 128");
    getPasswordOptions();
  }
  if (passwordLength == null) {
    alert("Please select a number between 8 and 128");
    getPasswordOptions();
  }
  upperCaseABC = confirm(
    "Would you like your password to include Upper Case characters?"
  );
  lowerCaseABC = confirm(
    "Would you like your password to include Lower Case characters?"
  );
  specialChar = confirm(
    "Would you like your password to include Special Case characters?"
  );
  numericChar = confirm(
    "Would you like your password to include Numeric characters?"
  );

  getCharacters();
}

//UpperCase confirmed
function UpperCaseCharlist() {
  passwordCharacters = upperCasedCharacters;
  if (lowerCaseABC) {
    passwordCharacters = passwordCharacters.concat(lowerCasedCharacters);
  }
  if (specialChar) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }
  if (numericChar) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  }

  
}

//lowerCase confirmed, not upperCase
function LowerCaseCharlist() {
  passwordCharacters = lowerCasedCharacters;
  if (specialChar) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }
  if (numericChar) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  }
}
//special confirmed, not upper or lower case
function specialCharlist() {
  passwordCharacters = specialCharacters;
  if (numericChar) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  }
}
//numbers confirmed, not uppr,lower or special

function getCharacters() {
  if (upperCaseABC) {
    UpperCaseCharlist();
  } else if (lowerCaseABC) {
    LowerCaseCharlist();
  } else if (specialChar) {
    specialCharlist();
  } else if (numericChar) {
    passwordCharacters = numericCharacters;
  } else {
    alert("Please select at least one Character type");
    getPasswordOptions();
  }
  console.log('Password Characters: ', passwordCharacters)
  generatePassword();
}

//Function for getting a random element from an array
function getRandom() {
 
  var randoIndex = Math.floor(Math.random() * passwordCharacters.length);
  return passwordCharacters[randoIndex]
  
}

// Function to generate password with user input
function generatePassword() {
  var password = [];

  for (let i = 0; i < passwordLength; i++) {
    var Random = getRandom(passwordCharacters[i])
    password.push(Random);
  }
  //return password;
  password = password.join("");

  console.log('Password: ', password)

  writePassword(password);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Get users Character Options
//getPasswordOptions()
//Create Character Array from Options
//getCharacters()
// //Generate random password
//generatePassword()

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", getPasswordOptions);

// console.log(passwordCharacters);
// console.log(getRandom());
// console.log(generatePassword());
