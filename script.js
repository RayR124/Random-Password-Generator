var generateBtn = document.querySelector("#generate");

var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;

character = ["!", "@", "#", "$", "%", "^", "&", "*"];
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

var toUpper = function (a) {
    return a.toUpperCase();
};

upLetter = letter.map(toUpper);

generateBtn.addEventListener("click", function () {
    gp = generatePassword();
    document.getElementById("password").placeholder = gp;
});

var initiate;

function generatePassword() {
    initiate = parseInt(prompt("How many characters would you like in your password? Choose between 8-15."));
    if (!initiate) {
        alert("Please define a parameter for the previous question.");
    } else if (initiate < 7 || initiate > 16) {
        initiate = parseInt(prompt("You must select a length between 8 and 15 characters."));
    } else {
        confirmNumber = confirm("This password will conatin Numbers.");
        confirmCharacter = confirm("This password will contain Special Characters.");
        confirmUppercase = confirm("This password will contain Uppercase letters.");
        confirmLowercase = confirm("And lastly, This password contain Lowercase letters.");
    };

    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("Fatal Error, please answer some parameters.");
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, letter, upLetter);
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, upLetter);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, letter);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(letter, upLetter);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(letter, upLetter);
    }
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);
    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(letter);
    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(upLetter);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = letter.concat(number);
    } else if (confirmLowercase && confirmUppercase) {
        choices = letter.concat(upLetter);
    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(upLetter);
    }
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = letter;
    }
    else if (confirmUppercase) {
        choices = space.concat(upLetter);
    };
    var password = [];

    for (var i = 0; i < initiate; i++) {
        var j = choices[Math.floor(Math.random() * choices.length)];
        password.push(j);
    }

    var pj = password.join("");
    UserInput(pj);
    return pj;
}

function UserInput(pj) {
    document.getElementById("password").textContent = pj;

}