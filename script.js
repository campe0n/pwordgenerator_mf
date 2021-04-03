// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  password = "";
  var numberLimit = prompt("How long do you want your password to be?");
  if (numberLimit < 8 || numberLimit > 128) {
      alert("Password must be at least 8 characters long and cannot exceed 128 characters.");
      return;
    }

  var askNumeric = confirm("Would you like to include numbers?", "Click ok  for yes and cancel for no");
  var askLowercase = confirm("Would you like to include lower case characters?");
  var askUppercase = confirm("Would you like to include upper case characters?");
  var askSpecialChars = confirm("Would you like to include special characters in your password?")

  let lowerCase = "abcdefghijklmnopqrstuvwxyz"
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numberSet = "0123456789"
  let symbols = "!@#$%^&*_+"

  var passwordCharacters = "";
  if (askNumeric === true) var passwordCharacters = passwordCharacters.concat(numberSet);
  if (askLowercase === true) var passwordCharacters = passwordCharacters.concat(lowerCase);
  if (askUppercase === true) var passwordCharacters = passwordCharacters.concat(upperCase);
  if (askSpecialChars === true) var passwordCharacters = passwordCharacters.concat(symbols);
  
  for (i = 0; i < numberLimit; i++) {
    let number = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters.substring(number, number + 1).trim();
  }

  passwordText.value = password;

  console.log(passwordCharacters)
  console.log(typeof password)
  console.log(password);
}  

//Event listener
generateBtn.addEventListener("click", function(){
  writePassword()
});