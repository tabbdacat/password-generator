// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

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
