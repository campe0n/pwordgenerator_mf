// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var charMax = 128;
    var charMin = 8;
    var specialChars = "!@#$%^&*_+";

    var winLength = window.prompt("How long do you want your password to be?");
        console.log(winLength);
    
    //var winSpecialChars = window.prompt("Do you want to include special characters?")
        //console.log(winSpecialChars);
    //var winLwrCase = window.prompt("Do you want to include lowercase characters?")
    //console.log(winLwrCase);2
    //var winUpprCase = window.prompt("Do you want to include uppercase characters?")
    //console.log(winUpprCase);
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    if (winLength < charMin) {
        alert("Password must have a minumum of eight characters and cannot exceed 128 characters");
    } 

    if (winLength > charMax) {
        alert("Password must have a minumum of eight characters and cannot exceed 128 characters");
    }  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    
writePassword();