// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function generateRandomSpecialChar() {
  const specialChar = " !#$%&'()*+,-./:;<=>?@[\ ]^_`{|}~\""
  return specialChar[Math.floor(Math.random() * specialChar.length)]
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
