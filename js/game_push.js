// The player position on the map.
const playerY = 50 + "%";

let tooClose = false;
let enemy1;
let enemy2;

let spawninterval;
let moveInterval;

let enemy1NotSpawn;
let enemy2NotSpawn;

// Enemy hit sound effect.
let HitSFX = document.createElement("AUDIO");
HitSFX.src = "audio/blopSound.mp3";

/**
 * Starts the isolation game.
 */
function startIsolationGame() {
    createPlayer();
    generateEnemies();
    document.body.id = "isolationBody";
    createTimeBar();
    timerbar(5);
    createScore("gameScore");
}

/**
 * Create the player model.
 */
function createPlayer() {
    let player = document.createElement('img');
    player.id = "player";
    if (easterEgg == true){
        player.src = "images/tegCharacter.png"; 
    } else{
        player.src = "images/player.png";
    }
    player.alt = "Player";
    document.body.appendChild(player);
}

/** 
 * An enemy1 constructor.
 */
function Enemy1() {
    this.position = 0;
    this.person = document.createElement('img');
    this.person.setAttribute("style", "display: none");
    this.person.setAttribute("draggable", "false");

    // Spawn the enemy to the right side.
    this.spawnRight = function () {
        if (!gamePause) {
            // EasterEgg.
            if (easterEgg == true){
                this.person.setAttribute("src", "images/tegEnemy.png");  
            } else{
                this.person.setAttribute("src", "images/enemy1.png");
            }

            this.person.setAttribute("style", "display: inline");
            this.person.setAttribute("class", "enemy1");
            this.person.setAttribute("style", "top: " + playerY);
            this.person.style["right"] = "0px";
            enemy1NotSpawn = false;
        } else {
            // Did not spawn.
            enemy1NotSpawn = true;
        }
    };

    // Move the enemy in the correct direction.
    this.movement = function () {
        let windowSize700 = window.matchMedia("(min-width: 700px)");
        let speed = windowChange(windowSize700);
        
        if (gamePause) {
            speed = 0;
        }

        this.person.style["right"] = parseInt(this.person.style["right"]) + speed + "px";
        this.position = parseInt(this.person.style["right"]);
    };
    document.body.appendChild(this.person);
}

/** 
 * An enemy2 constructor.
 */
function Enemy2() {
    this.position = 0;
    this.person = document.createElement('img');
    this.person.setAttribute("style", "display: none");
    this.person.setAttribute("draggable", "false");

    this.spawnLeft = function () {
        if (!gamePause) {
            // EasterEgg.
            if (easterEgg == true){
                this.person.setAttribute("src", "images/tegEnemy2.png");  
            } else{
                this.person.setAttribute("src", "images/enemy2.png");
            }

            this.person.setAttribute("style", "display: inline");
            this.person.setAttribute("class", "enemy2")
            this.person.setAttribute("style", "top: " + playerY);
            this.person.style["left"] = "0px";
            enemy2NotSpawn = false;
        } else {
            enemy2NotSpawn = true;
        }
    };

    //Move the enemy in the correct direction.
    this.movement = function () {
        let windowSize700 = window.matchMedia("(min-width: 700px)");
        let speed = windowChange(windowSize700);
        if (gamePause) {
            speed = 0;
        }
        this.person.style["left"] = parseInt(this.person.style["left"]) + speed + "px";
        this.position = parseInt(this.person.style["left"]);
    };
    document.body.appendChild(this.person);
}

/**
 * Handles @media and checks the screens size, adjusts speed of enemy.
 */
function windowChange(size) {
    if (size.matches) {
        return 40;
    } else {
        return 20;
    }
}

/**
 * Move the enemies towards the player.
 */
function movementInterval(enemy1, enemy2) {
    let spawn1time = Math.floor(Math.random() * 3) + 1;
    let spawn2time = Math.floor(Math.random() * 3) + 1;

    let middle = (window.innerWidth / 2);
    let spacing = middle * 0.10;
    
    // Movement for enemy 1.
    let spawn1 = setTimeout(function () {
        enemy1.spawnRight();

        let move = setInterval(function () {
            let movement1 = enemy1.movement();
            // Check if enemy has spawned or not.
            if (enemy1NotSpawn) {
                enemy1.spawnRight();
            }

            // When the enemy is clicked, they are removed and interval ends.
            enemy1.person.onclick = function () {
                clearInterval(move);
                score += 10;
                HitSFX.play();
                enemy1.person.remove();
            }

            if (enemy1.position >= (middle - spacing)) {
                clearInterval(move);
                tooClose = true;
                document.getElementById("player").src = "images/tombstone.png";
                enemy1.person.remove();
            }
        }, 90);
    }, (spawn1time * 1000));

    //Movement for enemy 2.
    let spawn2 = setTimeout(function () {
        enemy2.spawnLeft();

        let move = setInterval(function () {
            let movement2 = enemy2.movement();

            // Check if enemy has spawned or not.
            if (enemy2NotSpawn) {
                enemy2.spawnLeft();
            }

            // When the enemy is clicked, they are removed and interval ends.
            enemy2.person.onclick = function () {
                clearInterval(move);
                score += 10;
                HitSFX.play();
                enemy2.person.remove();
            }

            if (enemy2.position >= (middle - spacing)) {
                clearInterval(move);
                tooClose = true;
                document.getElementById("player").src = "images/tombstone.png";
                enemy2.person.remove();
            }
        }, 100);
    }, (spawn2time * 1000));
}

/**
 * Spawn the 2 enemies.
 */
function generateEnemies() {
    enemy1 = new Enemy1();
    enemy2 = new Enemy2();

    movementInterval(enemy1, enemy2);
}

/**
 * Ends the push game functions.
 */
function endPush() {
    if (tooClose) {
        gameOver = true;
        document.body.innerHTML = "";
        tooClose = false;
        clearInterval(timerbarNum);
        clearInterval(nextGameTimer);
    }
}

/**
 * Losing messege displayed in the game over screen.
 */
function pushMessage() {
    return "You could not push everyone away. Make sure you stay at least 6 feet away from people to avoid transfer of germs.";
}