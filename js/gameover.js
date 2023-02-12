/**
 * Saves the user's score in the database and creates the gameover screen.
 */
async function gameOverScreen() {
    await saveScoreDB(score);

    let scorereader = document.createElement('p');
    scorereader.setAttribute("id", "gameOverScore");
    scorereader.textContent="Score:" + score;
    document.body.appendChild(scorereader);
    
    createMuteButton();
    
    let heading =document.createElement('h1');
    heading.setAttribute("id", "heading");
    heading.textContent="GAME OVER";
    document.body.appendChild(heading);

    let tryagainbtn = document.createElement('button');
    tryagainbtn.setAttribute("id", "tryagainbtn");
    tryagainbtn.innerText="Ok";
    tryagainbtn.onclick = tryagainbtnClick;
    document.body.appendChild(tryagainbtn);
}

/**
 * Event handler for try gain button. 
 * refreshes the page to start the new game.
 */
function tryagainbtnClick() {
    score = 0;
    document.body.innerHTML = "";
    gameOver = false;
    easterEgg = false;
    mainMenu();
}