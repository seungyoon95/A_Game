let score = 0;
let count = 4;

// Initilizes all the games.
let sneeze = new Game("Cover their mouths", "Tap when green", startSneezeGame, endSneeze, sneezeMessage);
let handWash = new Game("Kill the germs!", "Tap", generateObjects, endHandwash, handwashMessage);
let quiz = new Game("Trivia", "Tap on the right answer", startQuizGame, endQuiz, whyQuizOver);
let push = new Game("Isolation", "Tap, dont let them touch you", startIsolationGame, endPush, pushMessage);
let mask = new Game("Put A Mask On!", "Tap to select the correct mask", startMask, endMask, maskMessage);
let buttonPress = new Game("Press green button", "tap", startButtonpress, buttonpressOver, buttonmessage);
let clap = new Game("Applaud!", "Tap as fast as you can", startClap, endClap, clapMessage);
let nomove = new Game("Break","Don't do anything",breakstart,breakend,breakfailmessage);
let gameList = [sneeze, handWash, quiz, buttonPress, push, mask, clap, nomove];
let game;
let gameOver = false;

/**
 * Main function that is called to create the next game screen.
 */
function nextGamePage() {
    createScore();
    createPauseMenu();
    createTitle();
    createTimer();
    createInstructions();
    game = selectGame();
    countdown(3);
    setGameTitle(game);
    setInstructions(game);
    createMuteButton();
}

/**
 * Creates a game object.
 * @param {The name of the mini-game as a string} gameName 
 * @param {The instructions for the game as a string} instructions 
 * @param {Starter Function that starts the game.} starterFunction
 * @param {The functions that ends the game} endFunction  
 */
function Game(gameName, instructions, starterFunction, endFunction, gameOverMessage) {
    this.gameName = gameName;
    this.instructions = instructions;
    this.starterFunction = starterFunction;
    this.endFunction = endFunction;
    this.gameOverMessage = gameOverMessage;

    /**
     * Gets the name of the game.
     */
    this.getName = function () {
        return gameName;
    }

    /**
     * Gets the instructions for the game.
     */
    this.getInstructions = function () {
        return instructions;
    }

    /**
     * Runs the game start function for this game.
     */
    this.startGame = function () {
        this.starterFunction();
        createMuteButton();
    }

    /**
     * Runs the game end function.
     */
    this.endGame = function () {
        this.endFunction();
    }

    this.getMessage = function () {
        return this.gameOverMessage();
    }
}

/**
 * Sets the game title on the html page.
 * @param {A game object} gameObj 
 */
function setGameTitle(gameObj) {
    let title = document.getElementById('title');
    title.innerText = gameObj.getName();
}

/**
 * Sets the game instructions on the html page.
 * @param {A game object} gameObj 
 */
function setInstructions(gameObj) {
    let instructions = document.getElementById('instructions');
    instructions.textContent = gameObj.getInstructions();
    instructions.style.backgroundColor = "#CCCCCC";
    instructions.style.fontSize = "3vh";
    instructions.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
}

/**
 * For the countdown that happens before the game.
 * Makes the numbers big and counts down to 0.
 */
function countdown(time) {
    let num = time;
    let pausenum = 0;
    let counter = document.getElementById("timer");

    let timer = setInterval(function () {
        counter.innerHTML = num;
        num--;

        // When the pause button is clicked, pause the game.
        document.getElementById("pausebtn").onclick = function () {
            pausenum = num;
            clearInterval(timer);
            document.getElementById("pauseMenu").style.display = "block";
            document.getElementById("pausebtn").style.display = "none";
            document.getElementById("title").style.color = "white";
        }

        if (num < 0) {
            clearInterval(timer);
            counter.innerHTML = "Start!";

            setTimeout(function () {
                counter.style.display = "none";
                document.body.innerHTML = "";
                if (gameOver == false) {
                    game.startGame();
                }

            }, 1000);
        }
    }, 1000);

    // The resume button.
    document.getElementById("menuResume").onclick = function () {
        document.getElementById("pauseMenu").style.display = "none";
        document.getElementById("pausebtn").style.display = "inline-block";
        document.getElementById("title").style.color = "black";
        countdown(pausenum);
    }
}

/**
 *  Selects a random game from the gameList.
 */
function selectGame(gameObj) {
    let nextGame = gameList[Math.floor(Math.random() * gameList.length)];
    return nextGame;
}

/**
 * Creates the Title for the html page.
 */
function createTitle() {
    let title = document.createElement('h1');
    document.body.appendChild(title);
    title.id = "title";
}

/**
 * Creates timer element for the HTML page.
 */
function createTimer() {
    let timer = document.createElement('h1');
    timer.id = "timer";
    document.body.appendChild(timer);
}

/**
 * Creates the instruction element for the HTML page.
 */
function createInstructions() {
    let ins = document.createElement('p');
    ins.id = "instructions";
    document.body.appendChild(ins);
}

/**
 * Creates a 'p' element and appends it to the body 
 * to display score.
 * @param {the screen that the score will be displayed} screen 
 */
function createScore(screen) {
    let scoreBoard = document.createElement("p");
    if (screen == "gameScore") {
        scoreBoard.id = "gameScore";
    } else if (screen = "nextGameScore") {
        scoreBoard.id = "nextGameScore";
    } else if (screen = "gameOverScore") {
        scoreBoard.id = "gameOverScore"
    }
    scoreBoard.innerText = "Score: " + score;
    document.body.appendChild(scoreBoard);
}

/**
 * Displays the current socre on the 'p' element created by 
 * 'create score' function.
 */
function displayGameScore() {
    document.getElementById("gameScore").innerHTML = "Score: " + score;
}