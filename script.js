// Assignment Code
var generateBtn = document.querySelector("#generate"); // targets generate id

// Lower and Upper case letters
var characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());
// Numbers and Special characters
var numbers = [1,2,3,4,5,6,7,8,9,0];
var specialCharacters = ["!","@","#","$","%","^","&","*"]

function generatePassword () {
  console.log("button was pressed");
  //1. prompt the user
  //  a. select password length 8 < 128
  //  b. select lowercase letters
  //  c. select uppercase letters
  //  d. select numbers
  //  e. select special characters

  //2. validate inputs

  //3. generate password

  //4. display password
  return "password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //calling the generatePassword function
  var passwordText = document.querySelector("#password"); //This is where the generated password displays on the screen

  passwordText.value = password; //plugs the generated password on the screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // when user clicks button, it will call the writePassword function
