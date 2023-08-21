// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passwordChars = "";
  // Prompts- each add specified characters when called upon
  let passLengthPrompt = prompt("Enter password length between 8-128 characters");
  if (passLengthPrompt < 8 || passLengthPrompt > 128) {

  }
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

let generatedPassword = "";
  
// for loop determines each spot for string length
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
