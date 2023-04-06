// Assignment Code
var generateBtn = document.querySelector("#generate"); // targets generate id

// Lower and Upper case letters
var characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());
// Numbers and Special characters
var numbers = [1,2,3,4,5,6,7,8,9,0];
var specialCharacters = ["!","@","#","$","%","^","&","*"]

function generatePassword (length, lowerSelect, upperSelect, numbersSelect, specialSelect) {
  //1. prompt the user
  var lengthSelect = prompt("How many characters do you want in your password? (between 8-128 characters)");

  if (lengthSelect >= 8 && lengthSelect <= 128) {
    var length = lengthSelect;
  } else if (lengthSelect < 8 || lengthSelect > 128) {
    alert("Please choose a length between 8 and 128 characters!");
    return;
  } else {
    alert("Please choose a valid number length for your password!");
    return;
  }

  //2. validate inputs
  var availableChar = [''];

  var lowerSelect = confirm("Do you want Lowercase Characters in your password?");
  console.log(lowerSelect);
  if (lowerSelect) {
    availableChar = availableChar.concat(lowercaseLetters);
  };

  var upperSelect = confirm("Do you want Uppercase Characters in your password?");
  console.log(upperSelect);
  if (upperSelect) {
    availableChar = availableChar.concat(uppercaseLetters);
  };

  var numbersSelect = confirm("Do you want Numbers in your Password?");
  console.log(numbersSelect);
  if (numbersSelect) {
    availableChar = availableChar.concat(numbers);
  };

  var specialSelect = confirm("Do you want Special Characters in your Password?");
  console.log(specialSelect);
  if(specialSelect) {
    availableChar = availableChar.concat(specialCharacters);
  };

  if (!lowerSelect && !upperSelect && !numbersSelect && !specialSelect) {
    alert("Please select at least one character type!");
    return;
  };

  //3. generate password
  var password = '';

  for(var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * availableChar.length);
    password += availableChar[randomIndex];
  }
  //4. display password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //calling the generatePassword function
  var passwordText = document.querySelector("#password"); //This is where the generated password displays on the screen

  passwordText.value = password; //plugs the generated password on the screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // when user clicks button, it will call the writePassword function

