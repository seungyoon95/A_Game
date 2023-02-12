// Variable for correct answer.
let correctAnswer;
// Variable for question number.
let num;

/**
 * Starts the mask game.
 */
function startMask() {
    //Randomize a number between 0 and 5 for question selection.
    num = Math.floor(Math.random() * 6);
    createScore("gameScore");
    createMuteButton();
    correctAnswer = false;
    createHTML();
    createTimeBar();
    timerbar(5);

    /**
     * Creates a HTML page with the mask game on it.
     */
    function createHTML() {
        // Creates a div element that contains the whole page.
        let container = document.createElement('div');
        container.id = "maskHTML";
        document.body.appendChild(container);

        // Creates a div element that contains the question and description.
        let item1 = document.createElement('div');
        item1.id = "item1";
        container.appendChild(item1);

        // Creates the question inside the item1 div.
        let question = document.createElement('h2');
        question.id = "maskQuestion";
        item1.appendChild(question);

        // Creates the description inside the item1 div.
        let desc = document.createElement('h4');
        desc.id = "maskDescription";
        item1.appendChild(desc);

        // Creates a div element that contains the face image.
        let face = document.createElement('div');
        face.id = "face";
        item1.appendChild(face);

        // Inserts the face image inside the face div.
        let faceImg = document.createElement('img');
        //If else statement for the easter egg.
        if (easterEgg == false) {
            faceImg.src = "images/Sneeze_person.png";
        } else {
            faceImg.src = "images/TegSneeze.png"
        }
        faceImg.className = "faceImg";
        face.appendChild(faceImg);

        // Creates a div element to contain all mask div elements.
        let imageContainer = document.createElement('div');
        imageContainer.className = "imageContainer";
        document.body.appendChild(imageContainer);

        // Creates a div element for mask 1.
        let mask1 = document.createElement('div');
        mask1.className = "mask1";
        imageContainer.appendChild(mask1);

        // Creates a div element for mask 2.
        let mask2 = document.createElement('div');
        mask2.className = "mask2";
        imageContainer.appendChild(mask2);

        // Creates a div element for mask 3.
        let mask3 = document.createElement('div');
        mask3.className = "mask3";
        imageContainer.appendChild(mask3);

        // Creates a div element for mask 4.
        let mask4 = document.createElement('div');
        mask4.className = "mask4";
        imageContainer.appendChild(mask4);

        // Creates a div element for mask 5.
        let mask5 = document.createElement('div');
        mask5.className = "mask5";
        imageContainer.appendChild(mask5);

        // Creates a div element for mask 6.
        let mask6 = document.createElement('div');
        mask6.className = "mask6";
        imageContainer.appendChild(mask6);

        // Inserts the mask 1 image into mask 1 div.
        let n95 = document.createElement('img');
        n95.src = "images/N95.jpg";
        n95.id = "mask1";
        n95.onclick = maskClick1;
        mask1.appendChild(n95);

        // Inserts the mask 2 image into mask 2 div.
        let sm = document.createElement('img');
        sm.src = "images/surgicalMask.png";
        sm.id = "mask2";
        sm.onclick = maskClick2;
        mask2.appendChild(sm);

        // Inserts the mask 3 image into mask 3 div.
        let gasMask = document.createElement('img');
        gasMask.src = "images/gasMask.jpg";
        gasMask.id = "mask3";
        gasMask.onclick = maskClick3;
        mask3.appendChild(gasMask);

        // Inserts the mask 4 image into mask 4 div.
        let pittaMask = document.createElement('img');
        pittaMask.src = "images/pittaMask.jpg";
        pittaMask.id = "mask4";
        pittaMask.onclick = maskClick4;
        mask4.appendChild(pittaMask);

        // Inserts the mask 5 image into mask 5 div.
        let eyeMask = document.createElement('img');
        eyeMask.src = "images/eyeMask.jpg";
        eyeMask.id = "mask5";
        eyeMask.onclick = maskClick5;
        mask5.appendChild(eyeMask);

        // Inserts the mask 6 image into mask 6 div.
        let facialMask = document.createElement('img');
        facialMask.src = "images/facialMask.jpg";
        facialMask.id = "mask6";
        facialMask.onclick = maskClick6;
        mask6.appendChild(facialMask);
    }

    // Selecting masks by their id.
    let m1 = document.getElementById("mask1");
    let m2 = document.getElementById("mask2");
    let m3 = document.getElementById("mask3");
    let m4 = document.getElementById("mask4");
    let m5 = document.getElementById("mask5");
    let m6 = document.getElementById("mask6");

    /**
     * Selects a random question from an array of 6 questions.
     * @param {Question number} num 
     */
    function questionChoice(num) {
        let questions = [
            "Which mask prevents ~95% of particles sized 0.3 microns and below, therefore suitable to protect yourself from COVID-19?",
            "Which mask would protect you against large droplets (fluid resistant), but does not protect you against smaller airborne particles?",
            "Which mask would protect you from almost anything, even from toxic gas?",
            "Which mask is used to filter out pollen and dust, but does not provide any protection against COVID-19?",
            "Which mask would you wear on Halloween?",
            "Which mask is suitable for moisturizing your skin, yet does not protect you from COVID-19?"
        ];
        return (questions[num]);
    }
    // Inserts the selected question to the question div.
    let question = questionChoice(num);
    document.getElementById("maskQuestion").innerHTML = question;

    /**
     * Onclick function for selecting mask 1.
     */
    function maskClick1() {
        // Disables onclick function for all masks after the first click.
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
        // If else statement for right or wrong answer.
        if (num == 0) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
            score += 5;
            displayGameScore();
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
    }

    /**
     * Onclick function for selecting mask 2.
     */
    function maskClick2() {
        // Disables onclick function for all masks after the first click.
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
        // If else statement for right or wrong answer.
        if (num == 1) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
            score += 5;
            displayGameScore();
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
    }

    /**
     * Onclick function for selecting mask 3.
     */
    function maskClick3() {
        // Disables onclick function for all masks after the first click.
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
        // If else statement for right or wrong answer.
        if (num == 2) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
            score += 5;
            displayGameScore();
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
    }

    /**
     * Onclick function for selecting mask 4.
     */
    function maskClick4() {
        // Disables onclick function for all masks after the first click.
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
        // If else statement for right or wrong answer.
        if (num == 3) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
            score += 5;
            displayGameScore();
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
    }

    /**
     * Onclick function for selecting mask 5.
     */
    function maskClick5() {
        //Disables onclick function for all masks after the first click.
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
        // If else statement for right or wrong answer.
        if (num == 4) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
            score += 5;
            displayGameScore();
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
    }

    /**
     * Onclick function for selecting mask 6.
     */
    function maskClick6() {
        //Disables onclick function for all masks after the first click.
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
        // If else statement for right or wrong answer.
        if (num == 5) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
            score += 5;
            displayGameScore();
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
    }
}

/**
 * Ends the game.
 */
function endMask() {
    if (correctAnswer == false) {
        gameOver = true;
    }
    clearInterval(nextGameTimer);
    document.body.innerHTML = "";
    clearInterval(timerbarNum);
}

/**
 * Message that appears after the game ends.
 */
function maskMessage() {
    return "Wrong mask choice. You can do better next time!";
}
