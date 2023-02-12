let sec;
let timerbarNum;
let nextGameTimer;
let gamePause;

/**
 *  The timer bar that is shown above every game.
 *  slowly decreases to the left based on the remaining amount of time.
 */
 function timerbar(time) {
    // Represents the amount of secs remaining to beat the mini-game.
    let sec = time;
    let pauseSec = 0;
    let widthdelay = 100;
    let timerbarWidth = 0;
    let timerbar = document.getElementById("timerbar");
    timerbar.style.transition = "width " + sec + "s linear";

    // Ensures the timer is loaded first.
    setTimeout(function() {
        timerbar.style.width = "0%";
    },widthdelay);
    
    // Just to showcase the number.
    let timerbarNum = setInterval(function() {
        sec--;
        timerbar.innerHTML = sec;
        
    }, 1000);

    // When the timer reaches 0, end game and timer.
    nextGameTimer = setTimeout(function () {
        clearInterval(timerbarNum);
        game.endGame();
        document.body.innerHTML = "";
        if (gameOver == false){
            nextGamePage();
        } else {
            document.body.innerHTML = "";
            gameOverScreen();
        }
    }, (sec * 1000));

    // Pause the time bar.
    document.getElementById("pausebtn").onclick = function() {
        pauseSec = sec;
        // Get the current width of the timer bar.
        let timerbarWidth = window.getComputedStyle(timerbar).getPropertyValue("width");
        timerbar.style.width = timerbarWidth;
        timerbar.style.animationPlayState = "paused";
        timerbar.style.transition = "";
        clearInterval(timerbarNum);
        clearInterval(nextGameTimer);
        gamePause = true;
        document.getElementById("pauseMenu").style.display = "block";
        document.getElementById("pausebtn").style.display = "none";
    }

    // The resume button.
    document.getElementById("menuResume").onclick = function() {
        document.getElementById("pauseMenu").style.display = "none";
        document.getElementById("pausebtn").style.display = "inline-block";
        timerbar.style.animationPlayState = "running";
        
        gamePause = false;
        respawnTimer(pauseSec);
    }
}

/**
 * Call the timerbar function after user clicks the "resume" button.
 */
function respawnTimer(time)  {
    timerbar(time);
}

/**
 * Creates and appends the timebar.
 */
function createTimeBar(){
    createPauseMenu();
    let container = document.createElement('div');
    container.id = "timerbar-container";
    document.body.appendChild(container);

    let timebar = document.createElement('div');
    timebar.id = "timerbar";
    container.appendChild(timebar);
}

/**
 * Check if the user has time left.
 */
function isTimeLeft(){
    let time = false;
    if (sec > 0){
        time = true;
    } 
    return time;
}