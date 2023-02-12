// Boolean value for clicked or not clicked.
let clapped = false;

/**
 * Starts the clap game.
 */
function startClap() {
    createScore("gameScore");
    createClap();
    createTimeBar();
    timerbar(5);
}

/**
 * Creates a HTML page with the clap game on it.
 */
function createClap() {
    // Creates a div element that contains the clap game content.
    let container = document.createElement('div');
    container.id = "clapHTML";
    document.body.appendChild(container);

    // Creates a div element that contains the image.
    let imgContainer = document.createElement('div');
    imgContainer.id = "imgDIV";
    container.appendChild(imgContainer);

    // Inserts the hand image inside the image div.
    let hands = document.createElement('img');
    // If else statement for the easter egg.
    if (easterEgg == false) {
        hands.src = "images/clap.png";
    } else {
        hands.src = "images/tegClap.png";
    }
    hands.id = "handImg";
    hands.onclick = oneClap;
    imgContainer.appendChild(hands);
}

/**
 * Onclick function to clap.
 */
function oneClap() {
    /**
     * Plays the clap sound when image is clicked.
     * Source: https://www.youtube.com/watch?v=zf5RbFveQLs
     */
    var clapSound = new Audio("audio/applause.mp3");
    clapSound.play();
    clapSound.volume = 0.1;
    // Sets the boolean value for clap to true.
    clapped = true;
    // Adds 1 to the score each time the image is clicked.
    score += 1;
    // Displays the current score.
    displayGameScore();
}

/**
 * Ends the clap game.
 */
function endClap() {
    if (clapped == false) {
        gameOver = true;
        clearInterval(nextGameTimer);
        document.body.innerHTML = "";
        clearInterval(timerbarNum);
    }
    // Resets the boolean value for clap to false. 
    clapped = false;
}

/**
 * Message that appears after the game ends.
 */
function clapMessage() {
    return "You were unable to clap in time. Please give healthcare workers a big round of applause!"
}
