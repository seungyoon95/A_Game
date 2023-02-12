// Variables for button game.
let buttonclick
let windWidth;
let windHeight;
let gameBtn;
let buttonPress1;
let pauseTimer;

/**
 * Function that runs the button game.
 */
function startButtonpress() {

    // Creates link to stylesheet.
    let styling = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "style/game_buttonpress.css";
    styling.appendChild(link);

    // Initializes variables.
    windWidth = window.innerWidth;
    windHeight = window.innerHeight;
    let switchtime = (Math.random() * 3000) + 1000;
    buttonclick = false;

    // Creates bad button.
    let gameBtn = document.createElement('img');
    if (easterEgg == false) {
        gameBtn.src = 'images/badButton.png';
    } else {
        gameBtn.src = "images/TegSneeze.png"
    }
    if (windWidth <= windHeight) {
        gameBtn.style.width = '80%';
    } else {
        gameBtn.style.height = '80%';
    }
    gameBtn.id = 'bad';
    gameBtn.onclick = function () {
        buttonpressed = 'bad';
        buttonclick = true;
        document.body.innerHTML = "";
        clearInterval(pauseTimer);
        clearInterval(timerbar);
        clearInterval(nextGameTimer);
        clearTimeout(buttonPress1);

        gameOver = true;
        gameOverScreen();
    };
    document.body.appendChild(gameBtn);

    createTimeBar();
    timerbar(5);
    createScore();
    changeBtnColor();

    /**
     * Decides when the button will change colors.
     */
    function changeBtnColor() {
        let secs = 0;
        let timeOutInProg = false;

        pauseTimer = setInterval(function () {
            secs += 10;
            // If the game is not paused, set timer for the button to change colors.
            if (!gamePause && !timeOutInProg) {
                timeOutInProg = true;

                // This switches the button when the switchtime has been reached.
                buttonPress1 = setTimeout(function () {
                    gameBtn.src = 'images/goodButton.png';
                    gameBtn.id = 'good';
                    gameBtn.onclick = function () {
                        buttonpressed = 'good'; buttonclick = true; score += 5;
                        document.body.innerHTML = "";
                        clearInterval(pauseTimer);
                        clearInterval(timerbar);
                        clearInterval(nextGameTimer);
                        clearTimeout(buttonPress1);
                        nextGamePage();
                    };

                    // This gives the gameover a true value if the green button has not been hit within 0.75 seconds.
                    setTimeout(function () {
                        if (buttonclick == false) {
                            document.body.innerHTML = "";
                            clearInterval(pauseTimer);
                            clearInterval(timerbar);
                            clearInterval(nextGameTimer);
                            clearTimeout(buttonPress1);

                            gameOver = true;
                            gameOverScreen();
                        }
                    }, 750);

                }, switchtime);

            } else if (gamePause) {
                // If game is paused.
                clearInterval(pauseTimer);
                clearTimeout(buttonPress1);
                switchtime -= secs;

                // Resume the button color changing setTimeout function.
                document.getElementById("menuResume").addEventListener("click", resumechangeBtnColor); 
            }
        }, 10);
    }

    /**
     * Used to call the changeBtnColor function again.
     */
    function resumechangeBtnColor() {
        changeBtnColor();
        document.getElementById("menuResume").removeEventListener("click", resumechangeBtnColor);
        gamePause = false;
    }
}

/**
 * End game function for button press game.
 */
function buttonpressOver() {
    if (buttonclick == false) {
        gameOver = true;
    }
    clearInterval(nextGameTimer);
    document.body.innerHTML = "";
    clearInterval(timerbarNum);
}

/**
 * Returns failure message if player fails button game.
 */
function buttonmessage() {
    return ("You released more covid into the world.");
}

