// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
var charMax = 128;
var charMin = 8;
var lowerCase = false;
var upperCase = false;

// Write password to the #password input
function writePassword() {
  var promptUser = prompt("How long do you want your password to be?");
  if (promptUser < 8) {
    alert("Password must be at least 8 characters long.");
  } else if
  (promptUser > 128) {
    alert("Password cannot exceed 128 characters.");
  }
  var askLowercase = prompt("Would you like to include lower case characters?", "Click ok or type no");
  if (askLowercase != null) {
    lowerCase = !lowerCase;
  }
  console.log(lowerCase);
  var askUppercase = prompt("Would you like to include upper case characters?");
  if (askUppercase != null) {
    upperCase = !upperCase;
  }
  console.log(upperCase);
  //var askSpecialChars = prompt("Would you like to include special characters in your password?")
  
  function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
  return;
}

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
