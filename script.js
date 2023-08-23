// Assignment Code
var generateBtn = document.querySelector("#generate");

// strings used for each character type
const specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";

function generatePassword() {
  // start with no characters included in string
  let passwordChars = "";
  // Prompt- to add specified length of password
  let passLengthPrompt = prompt("Enter password length between 8-128 characters");
//  if pass length is not within parameters, an error message will appear and null function
  if (passLengthPrompt < 8 || passLengthPrompt > 128) {
    alert("ERROR - Length must be between 8 and 128 characters");
    return null;
  }
// Prompts- each add specified characters string to passwordChars when called upon
  let lowerCasePrompt = prompt("Include lower case letters? Respond y for yes and n for no.");
  if (lowerCasePrompt === 'y') {
    passwordChars += lowerCase;
  }
  let upperCasePrompt = prompt("Include upper case letters? Respond y for yes and n for no.");
  if (upperCasePrompt === 'y') {
    passwordChars += upperCase;
  }
  let numberPrompt = prompt("Include numbers? Respond y for yes and n for no.");
  if (numberPrompt === 'y') {
    passwordChars += numbers;
  }
  let specialCharPrompt = prompt("Include special characters? Respond y for yes and n for no.");
  if (specialCharPrompt === 'y') {
    passwordChars += specialChar;
  }
  // if n is answer for all character types, an error message will appear and null function
  if (lowerCasePrompt === 'n' && upperCasePrompt === 'n' && numberPrompt === 'n' && specialCharPrompt === 'n') {
    alert('ERROR - Must include at least one character type');
    return null;
  }

  // start with blank password
let generatedPassword = "";
  
// for loop uses password length from prompt for each spot for string length
for (let i = 0; i < passLengthPrompt; i++) {
// randomizes 1 character within specified char types
generatedPassword += passwordChars[Math.floor(Math.random() * passwordChars.length)];
}
return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
