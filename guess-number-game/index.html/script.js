let secretNumber;
let maxNum;
let attempts;
let tries;

function startGame() {
    let level = document.getElementById("difficulty").value;

    if (level === "easy") {
        maxNum = 50;
        attempts = 10;
    } 
    else if (level === "medium") {
        maxNum = 100;
        attempts = 8;
    } 
    else {
        maxNum = 200;
        attempts = 5;
    }

    secretNumber = Math.floor(Math.random() * maxNum) + 1;
    tries = 0;

    document.getElementById("info").innerText =
        `I picked a number between 1 and ${maxNum}`;

    document.getElementById("attempts").innerText =
        `Attempts left: ${attempts}`;

    document.getElementById("message").innerText = "";

    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessBtn").disabled = false;
}

function checkGuess() {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (!guess) {
        message.innerText = "Enter a valid number!";
        return;
    }

    if (guess < 1 || guess > maxNum) {
        message.innerText = `Guess between 1 and ${maxNum}`;
        return;
    }

    tries++;
    let left = attempts - tries;

    if (guess === secretNumber) {
        message.innerText = `🎉 Correct! You won in ${tries} tries!`;
        disableGame();
        return;
    } 
    else if (guess < secretNumber) {
        message.innerText = "Too low!";
    } 
    else {
        message.innerText = "Too high!";
    }

    if (Math.abs(guess - secretNumber) <= 5) {
        message.innerText += " 🔥 Very close!";
    }

    document.getElementById("attempts").innerText =
        `Attempts left: ${left}`;

    if (left <= 0) {
        message.innerText = `💀 Game Over! Number was ${secretNumber}`;
        disableGame();
    }
}

function disableGame() {
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessBtn").disabled = true;
}
