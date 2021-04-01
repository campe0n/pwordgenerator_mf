// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//global vars
var charMax = 128;
var charMin = 8;
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numberSet = "0123456789"
let symbols = "!@#$%^&*_+"

// Write password to the #password input
function writePassword() {

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
    var password = '';
    var number = Math.floor(Math.random() * lowerCase.length + upperCase.length +
    numberSet.length + symbols.length)
    if (askNumeric === true) password += numberSet;
    if (askLowercase === true) password += lowerCase;
    if (askUppercase === true) password += upperCase;
    if (askSpecialChars === true) password += symbols;
  }
  passwordText.value = password;
 
  console.log(number);
  console.log(password);
}  

//Event listener
generateBtn.addEventListener("click", function(){
  writePassword()
});