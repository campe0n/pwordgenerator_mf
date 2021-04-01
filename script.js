// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//global vars
var charMax = 128;
var charMin = 8;
let charSet = "1234567890abcdefghjijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_+";

// Write password to the #password input
function writePassword() {
  var password = '';

  var numberLimit = prompt("How long do you want your password to be?");
  if (numberLimit < 8) {
    alert("Password must be at least 8 characters long.");
  } else if
  (numberLimit > 128) {
    alert("Password cannot exceed 128 characters.");
  }

  var askNumeric = confirm("Would you like to include numbers?", "Click ok or type no");
  var askLowercase = confirm("Would you like to include lower case characters?");
  var askUppercase = confirm("Would you like to include upper case characters?");
  var askSpecialChars = confirm("Would you like to include special characters in your password?")
  
  for (let i = 0; i < numberLimit; i++) {
    var number = Math.floor(Math.random() * charSet.length)
    password += charSet.substring(number, number + 1)
  }

  passwordText.value = password;

  console.log(charSet);
  console.log(password);
}  

//Event listener
generateBtn.addEventListener("click", function(){
  writePassword()
});

//Generator functions
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*_+"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomNumber());
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomSymbol());