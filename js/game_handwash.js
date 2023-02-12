// Virus counter
let virusCounter;
// Amount of viruses to spawn
let virusAmount;
// Virus sprite array
let virusSprites = ["images/virus1.png", "images/virus2.png", "images/virus3.png", "images/virus4.png"];

/**
 * Object constructor.
 */
function CreateObject(difficulty) {
    this.difficulty = difficulty;
    let obj = document.createElement("img");
    if (easterEgg == true){
        obj.src = "images/tegSneeze.png";
    } else {
        obj.src = "images/virus" + Math.ceil((Math.random() * 4))  +".png";
    }
    obj.style.position = "absolute";
    let xy = getXY();
    obj.style.left = xy[0] + "px";
    obj.style.top = xy[1] + "px";
    obj.onclick = clickHandler;
    obj.className = "virus";
    document.body.appendChild(obj);
}

/**
 * Object onclick handler.
 */
function clickHandler() {
    virusCounter--;
    document.body.removeChild(this);
    score += 5;
    displayGameScore();
}

/**
 * X and Y coordinate calculator.
 */
function getXY() {
    let x;
    let gettingX = true;
    while (gettingX) {
        x = Math.floor(Math.random() * window.innerWidth) - 100;
        console.log(x);
        if (x > 0) {
            gettingX = false;
        }
    }

    let y;
    let gettingY = true;
    while (gettingY) {
        y = Math.floor(Math.random() * window.innerHeight) - 100;
        console.log(y);
        if (y > 100 && y < window.innerHeight - 200) {
            gettingY = false;
        }
    }

    return [x, y];
}

/**
 * Dynamically generate objects.
 */
function generateObjects() {
    virusAmount = Math.ceil(Math.random() * 4 + 4);
    for (let i = 0; i < virusAmount; i++) {
        CreateObject();
    }
    virusCounter = virusAmount;
    createTimeBar();
    timerbar(5);
    
    createScore("gameScore");
}

function endHandwash(){
    if (virusCounter > 0){
        document.body.innerHTML = "";
        gameOver = true;
        virusCounter = virusAmount;
        clearInterval(nextGameTimer);
        clearInterval(timerbarNum);
    } 
}

function handwashMessage(){
    return  "You could not kill 5 germs. Make sure you wash your hands regularly to kill all the germs.";
}