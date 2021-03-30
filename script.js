// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//global vars
var charMax = 128;
var charMin = 8;
let charSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_+"
var lowerCase = false;
var upperCase = false;
var specialChars = false;
var password = '';

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

  for (let i = 0; i < numberLimit; i++) {
    let number = Math.floor(Math.random() * charSet.length);
    password += charSet.substring(number, number + 1);
  }
  

  passwordText.value = password;

  console.log(numberLimit);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(specialChars);
  console.log(password);
}

//Event listener
generateBtn.addEventListener("click", function(){
  writePassword()
});
