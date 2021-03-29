// Assignment Code
var generateBtn = document.querySelector("#generate");

//global vars
var charMax = 128;
var charMin = 8;
var lowerCase = false;
var upperCase = false;
var specialChars = false;

// Write password to the #password input
function writePassword() {

  var number = prompt("How long do you want your password to be?");
  if (number < 8) {
    alert("Password must be at least 8 characters long.");
  } else if
  (number > 128) {
    alert("Password cannot exceed 128 characters.");
  }

  var askLowercase = confirm("Would you like to include lower case characters?", "Click ok or type no");
  if (askLowercase === true) {
    lowerCase = !lowerCase;
  }

  var askUppercase = confirm("Would you like to include upper case characters?");
  if (askUppercase === true) {
    upperCase = !upperCase;
  }

  var askSpecialChars = confirm("Would you like to include special characters in your password?")
  if (askSpecialChars === true) {
    specialChars = !specialChars;
  }

  console.log(number);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(specialChars);

function generatePassword(lowerCase, upperCase, specialChars) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  }
}

console.log(getRandomLower);
console.log(getRandomUpper);
console.log(getRandomNmbr);
console.log(getRandomSymbl);
//generate functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getRandomNmbr() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbl() {
  const symbols = "!@#$%^&*_+";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
