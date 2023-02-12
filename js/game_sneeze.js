const MAXPEOPLE = 5;
let peopleArray = [];
let masterOverlap = false;
clicked = false;
let animation;

/**
 * Stars the sneeze game.
 */
function startSneezeGame() {
    // Creates person object on screen.
    while (peopleArray.length < MAXPEOPLE) {
        let person;
        //If the user is on mobile the size of a person sprite is smaller.
        if (window.innerWidth < 500) {
            person = new Person("75px", "75px");
        } else {
            person = new Person("100px", "100px")
        }
        // Sets random coords for each person object created.
        // Check setRandomX and setRandom.
        person.setRandomX();
        person.setRandomY();

        if (peopleArray.length == 0) {
            person.append();
            peopleArray.push(person);
        } else { 
            /**
             * Iterates over the person objects.
             * And checks if the objects are overlapping.
             * Check isOverlap below.
             *  */ 
            for (let i = 0; i < peopleArray.length; i++) {
                if (peopleArray.length < MAXPEOPLE && isOverlap(peopleArray[i], person) == false) {
                    masterOverlap = true;
                } else {
                    masterOverlap = false;
                    break;
                }
            }
            /**
             * Checks if the masterOverlap is true and 
             * if the person is spawnned below the pause and score elements.
             */
            if (masterOverlap == true && parseInt(person.getYcord()) > 100) {
                person.append();
                peopleArray.push(person);
            }
        }
    }
    // Check turnOnSneezeAnimation below.
    turnOnSneezeAnimation(); 
    // Creates the timebar and starts the timer.
    createTimeBar()
    timerbar(5);
    createScore("gameScore"); 
}


/**
 * Gets the center (x,y) of the 'obj'.
 * @param {an element or an object} personObj 
 */
function getCenter(personObj) {
    let centerX = parseInt(personObj.getXcord()) + parseInt(personObj.getWidth()) / 2;
    let centerY = parseInt(personObj.getYcord()) + parseInt(personObj.getHeight()) / 2;
    return [centerX, centerY];
}

/**
 * Gets the distance between the centers of two elements.
 * @param {Person object number 1} obj1 
 * @param {Person object number 2} obj2 
 */
function getDistance(obj1, obj2) {

    let x1 = getCenter(obj1);
    y1 = x1[1];
    x1 = x1[0];
    let x2 = getCenter(obj2);
    y2 = x2[1];
    x2 = x2[0];

    let distance = Math.hypot(x1 - x2, y1 - y2);

    return distance;
}
/**
 * Checks if two objects are overlapping.
 * @param {Person object number 1} obj1 
 * @param {Person object number 2} obj2  
 */
function isOverlap(obj1, obj2) {
    let overlap = false;
    let height = parseInt(obj1.getHeight());
    let width = parseInt(obj1.getWidth());

    distance = getDistance(obj1, obj2);
    if (distance < height + 50 || distance < width + 50) {
        overlap = true;
    }
    return overlap;
}

/**
 * Turns on the sneeze animation that tells the user when to click.
 */
function turnOnSneezeAnimation() {
    let sneezerObj = peopleArray[peopleArray.length - 1];
    sneezer = sneezerObj.getObject();
    paddingSize = 20;
    paddingTemp = 20;
    animation = setInterval(frame, 10);

    /**
     * Reduces the size and changes the color of the button border.
     */
    function frame() {
        // if statement to check if the game is Paused.
        if (!gamePause) {
            if (paddingSize < 1) {
                clearInterval(animation);
                canClick = false;
                sneezer.style.border = "1px solid Black";
                // Decreases the border size and changes color.
            } else {
                paddingSize -= .10;
                if (paddingSize > (paddingTemp / 3 * 2)) {
                    sneezer.style.border = paddingSize + "px solid Red";
                } else if (paddingSize < (paddingTemp / 3 * 2) & paddingSize > (paddingTemp / 2)) {
                    sneezer.style.border = paddingSize + "px solid Yellow";
                } else {
                    sneezer.style.border = paddingSize + "px solid Green";
                    if (easterEgg == true) {
                        sneezer.src = "images/tegSneezed.png"
                    } else {
                        sneezer.src = "images/sneezed.png";
                    }
                    sneezer.onclick = function () {
                        clicked = true;
                    }

                    /**
                     * If the user clicks the object on time,
                     * it clears the animation for the first object and 
                     * Starts for the other.
                     */
                    if (clicked == true) {
                        clearInterval(animation);
                        sneezerObj.onClickGreen();

                        // If nothing is clicked then the game is lost.
                    } else if (clicked == false && paddingSize < 1) {
                        gameLost();
                    }
                }
            }
        }
    }
}

/**
 * Ends the game.
 */
function endSneeze() {
    clearInterval(animation);
    peopleArray = [];
}

/**
 * Adds 10 to the score.
 */
function addScore() {
    score += 10;
    displayGameScore()
}

/**
 * Represents a person.
 * @param {The height of the person object} height 
 * @param {The width of the person object } width 
 */
function Person(height, width) { 
    this.person = document.createElement("img");
    this.person.style.position = "absolute";
    this.person.className = "person";
    this.person.style.top = "0px";
    this.person.style.left = "0px";
    this.person.style.height = height;
    this.person.style.width = width;
    if (easterEgg == true) {
        this.person.src = "images/tegSneeze.png"
    } else {
        this.person.src = "images/Sneeze_person.png";
    }

    this.append = function () {
        document.body.appendChild(this.person);
    }

    /**
     * Gets the X cord of the object.
     */
    this.getXcord = function () {
        let xCord = (this.person.style.left);
        return xCord;
    }

    /**
     * Gets the Y cord of the object.
     */
    this.getYcord = function () {
        let yCord = (this.person.style.top);
        return yCord;
    }

    /**
     * Gets the height of the object.
     */
    this.getHeight = function () {
        let height = (this.person.style.height);
        return height;
    }

    /**
     * Gets the width of the object.
     */
    this.getWidth = function () {
        let width = (this.person.style.width);
        return width;
    }

    /**
     * Gets the element type of the object.
     */
    this.getObject = function () {
        return (this.person);
    }

    /**
     * Sets the objs X cord to a random place on screen.
     */
    this.setRandomY = function () {
        let height = (window.innerHeight) * 0.8 - 100;
        let yCord = Math.floor(Math.random() * height);
        this.person.style.top = yCord + "px";
    }

    /**
     * Sets the objs X cord to a random place on screen.
     */
    this.setRandomX = function () {
        let width = (window.innerWidth) * 0.9 - 120;
        let xCord = Math.floor(Math.random() * width);
        this.person.style.left = xCord + "px";
    }

    /**
     * Triggers when a button is clicked when its green.
     */
    this.onClickGreen = function () {
        addScore();
        clicked = false;
        sneezer.src = "images/Sneeze_person.png";
        sneezer.style.border = "none";
        sneezer.remove();
        peopleArray.pop();
        turnOnSneezeAnimation();
    }
}

/**
 * Message that appears after the game ends.
 */
function sneezeMessage() {
    return "The sneeze was not stopped on time. Make sure you cover your face when you sneeze.";
}

/**
 * Clears the html page and displays score after user loses.
 */
function gameLost() {
    if (clicked == false) {
        peopleArray = [];
        gameOver = true;
        document.body.innerHTML = "";
        clearInterval(timerbarNum);
        clearInterval(animation);
        clearInterval(nextGameTimer);
        gameOverScreen();
    }
}