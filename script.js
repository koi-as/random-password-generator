// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  console.log("Button press");
  //1. prompt the user
  //  a. select password length 8 < 128
  //  b. select lowercase letters
  //  c. select uppercase letters
  //  d. select numbers
  //  e. select special characters
  //2. validate inputs
  //3. display password

  return "Password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //calling the generatePassword function
  var passwordText = document.querySelector("#password"); //This is where the generated password displays on the screen

  passwordText.value = password; //plugs the generated password on the screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
