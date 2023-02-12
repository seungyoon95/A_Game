// Creates fail reason variable.
let breakfailreason;

// Runs the break game.
function breakstart() {
    let styling = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "style/timer.css";
    styling.appendChild(link);

    // Creates playing area.
    let breakscreen = document.createElement('div');
    breakscreen.id = "breakarea";
    breakscreen.style.width = "100%";
    breakscreen.style.height = "90%";
    document.body.appendChild(breakscreen);

    // Losing conditions.
    let breakarea = document.getElementById('breakarea');
    document.addEventListener("keydown", function () {
        gameOver = true;
        breakfailreason = 0;
    });
    breakarea.oncontextmenu = function () {
        gameOver = true;
        breakfailreason = 1;
    };
    breakarea.onclick = function () {
        gameOver = true;
        breakfailreason = 2;
    };
    breakarea.onmousemove = function () {
        gameOver = true;
        breakfailreason = 3;
    };

    createTimeBar()
    timerbar(5);
}

// Runs after game to see if player failed this game.
function breakend() {
    if (gameOver == true) {
        gameOverScreen;
    } else {
        score += 5
    }
    clearInterval(animation);
    clearInterval(nextGameTimer);
    document.body.innerHTML = "";
    clearInterval(timerbarNum);
}

// Chooses the game over message according to the way the player failed.
function breakfailmessage() {
    let breakmessages = ["You typed.", "You right-clicked", "You clicked", "You moved the mouse."]
    return (breakmessages[breakfailreason]);
}
