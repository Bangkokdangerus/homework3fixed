// Assignment Code


var generateBtn = document.querySelector("#generate");
function generatePassword() {
    var thePassword = "";

    var passwordLength = prompt("Enter the desired password length, at least 8 characters and no more than 128 characters");
    var numPass = parseInt(passwordLength); 
    if (numPass <=7 || numPass == NaN){ return "error";}
    console.log(numPass);
    var lowercaseInc  = confirm("Please choose to include lowercase yes or no");
    if (lowercaseInc){thePassword = thePassword + "a"}
    console.log(lowercaseInc);
    var uppercaseInc  = confirm("Please choose to include an uppercase letter yes or no");
    if (uppercaseInc){thePassword = thePassword + "A"}
    console.log(uppercaseInc);
    var numbersInc  = confirm("Please choose to include a number yes or no");
    if (numbersInc){thePassword = thePassword + "0"}
    console.log(numbersInc);
    var spInc  = confirm("Please choose to include a special character yes or no");
    if (spInc){thePassword = thePassword + "$"}
    console.log(spInc);

    for(let i=0;i< numPass; i++)
    { thePassword = thePassword + "a"; }

    return thePassword;
  
  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());