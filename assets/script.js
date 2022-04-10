// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//Arrays for letters, numbers, and special scharacters
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

console.log(lowerCasedCharacters[28]);

//Confirm how many characters will be included in the password
function generatePassword() {

  var newPassword = "";
  var confirmLength = (prompt("How many characters do you want your password to include?"));

  //Loop if the chosen amount of characters is less or more than the reqired amount
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters. Please choose agaon.");
    confirmLength = (prompt("How many characters do you want your password to include?"));
  }

  //Variables to store selected character types
  var hasLowerCased = confirm("Click ok to include lower cased characters");
  var hasUpperCased = confirm("Click ok to include upper cased characters");
  var hasSpecial = confirm("Click ok to include special characters");
  var hasNumbers = confirm("Click ok to include numbers");

  //Loop to esnure that one variable was chosen
  if (hasLowerCased === false && hasUpperCased === false && hasSpecial === false && hasNumbers === false) {
    alert("You need to choose at least ONE character type");
    hasLowerCased = confirm("Click OK to include lower case characters");
    hasUpperCased = confirm("Click OK to include upper case characters");
    hasSpecial = confirm("Click OK to include special characters");
    hasNumbers = confirm("Click OK to include numbers");
    // return;

  }

  //RUN THE RANDOM LETTER LOGIC OF IT SATIFIES THE LENGTH AND INCLUDE criteria 

  var randomLetter;
  var newListOfChars = []; //mixed arraay of allthe letters or chars 
  //include lowercase letters 
  if (hasLowerCased) {
    newListOfChars = newListOfChars.concat(lowerCasedCharacters);
    // console.log(newListOfChars); 
  }

  if (hasUpperCased) {
    newListOfChars = newListOfChars.concat(upperCasedCharacters);
    // console.log(newListOfChars);       
  }
  if (hasSpecial) {
    newListOfChars = newListOfChars.concat(specialCharacters);
    // console.log(newListOfChars);       
  }
  if (hasNumbers) {
    newListOfChars = newListOfChars.concat(numbers);
    // console.log(newListOfChars);       
  }
  console.log("new list of letters ", newListOfChars);

  //generating the random letters 
  for (var i = 0; i < confirmLength; i++) {
    var randomIndex = Math.floor(Math.random() * newListOfChars.length);
    randomLetter = newListOfChars[randomIndex];
    console.log("randomLetter", randomLetter);

    //adding all the random letters together 
    newPassword = newPassword + randomLetter;

  }
  return newPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);