
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = [
  '0', 
  '1', 
  '2', 
  '3', 
  '4', 
  '5', 
  '6', 
  '7', 
  '8', 
  '9'
];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordLength = 0;
var passwordCharacters
var upperCaseABC = true;
var lowerCaseABC = true;
var specialChar = true;
var numericChar = true; 
var password


// Function to prompt user for password options

function getPasswordOptions(){
passwordLength = prompt("Please input desired password length (8-128 characters)");
  /*if ("8" > passwordLength < "128") { 
    alert("Please select a number between 8 and 128")
    getPasswordOptions()
  }*/
upperCaseABC = confirm("Would you like your password to include Upper Case characters?")
lowerCaseABC = confirm("Would you like your password to include Lower Case characters?")
specialChar = confirm("Would you like your password to include Special Case characters?")
numericChar = confirm("Would you like your password to include Numeric characters?")
}

// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor((Math.random()*arr.length))];
  }

  console.log(getRandom())
  
// Function to generate password with user input
function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
          password += getRandom(passwordCharacters[i])
  }

};
  
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//UpperCase confirmed
function UpperCaseCharlist() {
  (passwordCharacters = upperCasedCharacters)
      if (lowerCaseABC) {
        passwordCharacters += lowerCasedCharacters
      }
      if (specialChar) {
    passwordCharacters += specialCharacters
}
      if (numericChar) {
    passwordCharacters += numericCharacters
}
}

//lowerCase confirmed, not upperCase
function LowerCaseCharlist() {
  (passwordCharacters=lowerCasedCharacters)
  if (specialChar) {
    passwordCharacters += specialCharacters
}
      if (numericChar) {
    passwordCharacters += numericCharacters
}
}
//special confirmed, not upper or lower case
function specialCharlist() {
  (passwordCharacters = specialCharacters)
if (numericChar) {
  passwordCharacters += numericCharacters
}
}
//numbers confirmed, not uppr,lower or special

  //passwordCharacters = numericCharacters

  //programme

getPasswordOptions()


if (upperCaseABC) {
  UpperCaseCharlist()
}
else if (lowerCaseABC) {
  LowerCaseCharlist()
}
else if (specialChar) {
  specialCharlist()
}
else if (numericChar) {
  passwordCharacters = numericCharacters
}
else {
  alert("Please select at least one Character type")
  getPasswordOptions()
}

generatePassword()
  


