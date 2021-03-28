// Assignment Code
var generateBtn = document.querySelector("#generate");

//object containg functions
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNmbr,
    symbol: getRandomSymbl,
};

//limitation variables
var charMax = 128;
var charMin = 8;
var specialChars = true;1213
var lowerCase = true;
var upperCase = true;

// Write password to the #password input
function writePassword() {
    var promptUser = window.prompt("How long do you want your password to be?")
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

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