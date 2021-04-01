// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//global vars
var charMax = 128;
var charMin = 8;
let charSet = "1234567890"
let charNumeric = "1234567890";
let charLowercase = "abcdefghijklmnopqrstuvwxyz";
let charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charSpecialChars = "!@#$%^&*_+";

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
    var number = Math.floor(Math.random() * (charNumeric.length + charLowercase.length + charUppercase.length + charSpecialChars.length));
    password += charNumeric.substring(number, number + 1) + charLowercase.substring(number, number + 1) +
    charUppercase.substring(number, number + 1) + charSpecialChars.substring(number, number + 1);
  }

  passwordText.value = password;

  console.log(askNumeric);
  console.log(askLowercase);
  console.log(askUppercase);
  console.log(askSpecialChars);
  console.log(password);
}  

//Event listener
generateBtn.addEventListener("click", function(){
  writePassword()
});