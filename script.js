// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//global vars
var charMax = 128;
var charMin = 8;
let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_+0123456789";
var numbers = false;
var lowerCase = false;
var upperCase = false;
var specialChars = false;
var password = '';
var number = undefined;

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

  var askNumbers = confirm("Would you like to include numbers?", "Click ok or type no");
  if (askNumbers === true) {
    numbers = !numbers;
  }

  var askLowercase = confirm("Would you like to include lower case characters?");
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
    var number = Math.floor(Math.random() * charSet.length);
    password += charSet.substring(number, number + 1);
  }

 
  console.log(number);

  passwordText.value = password;

  console.log(numberLimit);
  console.log(numbers);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(specialChars);
  console.log(password);
}  

//Event listener
generateBtn.addEventListener("click", function(){
  writePassword()
});
