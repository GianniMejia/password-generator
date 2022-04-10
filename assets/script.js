// Assignment code here



//Arrays for letters, numbers, and special scharacters
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


//Confirm how many characters will be included in the password
function generatePassword() {
  while(confirmLength <= 8 || confirmLength >= 128)
  var confirmLength = (prompt("How many characters do you want your password to include?"));
  }
  
  //Loop if the chosen amount of characters is less or more than the reqired amount
  while(confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters. Please choose agaon.");
    var confirmLength = (prompt("How many characters do you want your password to include?"));
  }

  

//Variables to stire selected character types
var hasLowerCased = confirm("Click ok to include lower cased characters");
var hasUpperCased = confirm("Click ok to include upper cased characters");
var hasSpecial = confirm("Click ok to include special characters");
var hasNumbers = confirm("Click ok to include numbers");




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);