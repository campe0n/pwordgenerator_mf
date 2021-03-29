// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
var charMax = 128;
var charMin = 8;
var specialChars = true;1213
var lowerCase = true;
var upperCase = true;
var passwordText = document.querySelector("#password");
passwordText.value = password;
var promptUser = prompt("How long do you want your password to be?", "Enter a number.")

if (promptUser < 8) {
    alert("Password must be at least 8 characters long.")
}
if (promptUser > 128) {
    alert("Password cannot exceed 128 characters.")
}

var askLowercase = prompt("Would you like to include lower case characters?", "Type yes or no.")
var askUppercase = prompt("Would you like to include upper case characters?")
var askSpecialChars = prompt("Would you like to include special characters in your password?")
}

//generator functions

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

console.log(charMax);

//call functions
writePassword();