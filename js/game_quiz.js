// Creates variables.
let question;
let qnum;
let corans;
let answerClicked;

/**
 * Runs the game.
 */
function startQuizGame() {
    qnum = Math.floor(Math.random() * 9);
    answerClicked = false;
    createTimeBar()
    timerbar(5);
    createScore();

    let styling = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "style/timer.css";
    styling.appendChild(link);

    let styling2 = document.getElementsByTagName('head')[0];
    let link2 = document.createElement('link');
    link2.rel = "stylesheet";
    link2.type = "text/css";
    link2.href = "style/game_quiz.css";
    styling2.appendChild(link2)

    // Creates the Question and answers in the body of the page.
    let container = document.createElement('div');
    container.className = "grid_container";
    document.body.appendChild(container);

    let item1 = document.createElement('div');
    item1.className = "item1";
    container.appendChild(item1);

    let question = document.createElement("h1");
    question.id = "question";
    question.innerText = "Question";
    item1.appendChild(question);

    let item2 = document.createElement('div');
    item2.className = "item2";
    container.appendChild(item2);

    let a1 = document.createElement("h2");
    a1.id = "a1";
    a1.innerText = "Answer 1";
    a1.onclick = function () {
        guess(0);
        answerClicked = true;
    };
    item2.appendChild(a1);

    let item3 = document.createElement('div');
    item3.className = "item3";
    container.appendChild(item3);

    let a2 = document.createElement("h2");
    a2.id = "a2";
    a2.innerText = "Answer 2";
    a2.onclick = function () {
        guess(1);
        answerClicked = true;
    }
    item3.appendChild(a2);

    let item4 = document.createElement('div');
    item4.className = "item4";
    container.appendChild(item4);

    let a3 = document.createElement("h2");
    a3.id = "a3";
    a3.innerText = "Answer 3";
    a3.onclick = function () {
        guess(2);
        answerClicked = true;
    };
    item4.appendChild(a3);

    let item5 = document.createElement('div');
    item5.className = "item5";
    container.appendChild(item5);

    let a4 = document.createElement("h2");
    a4.id = "a4";
    a4.innerText = "Answer 4";
    a4.onclick = function () {
        guess(3);
        answerClicked = true;
    };
    item5.appendChild(a4);

    // This is  all the variables containing the ids that come from the body.
    let quest = document.getElementById("question");
    let answer1 = document.getElementById("a1");
    let answer2 = document.getElementById("a2");
    let answer3 = document.getElementById("a3");
    let answer4 = document.getElementById("a4");

    // This function chooses the question based on the random number.
    function questionchoice(qnum) {
        let questions = ["What animal did coronavirus presumably come from?",
        "Which of these should you NOT do in an epidemic?",
        "What is NOT a symptom of COVID-19?",
        "What restriction does the Quarantine Act place on travellers returning to Canada?",
        "What type of mask is the best for protection of yourself?",
        "What does it mean to flatten the curve?",
        "What system does the coronavirus attack in a human?",
        "How far do water droplets travel from a person when coughing?",
        "What does NOT stop transmission?"]
        console.log(questions[qnum])
        return (questions[qnum])
    }

    // This function gets the choices for the question.
    function choices(qnum) {
        let choicearr;
        if (qnum == 0) {
            choicearr = ["Bats", "Pangolin", "Rat", "Mosquitos"];
        } else if (qnum == 1) {
            choicearr = ["Party", "Self-Isolate", "Wash Hands", "Not Touch Your Face"]
        } else if (qnum == 2) {
            choicearr = ["Soreness", "Fever", "Dry Cough", "Fatigue"]
        } else if (qnum == 3) {
            choicearr = ["Self isolate for 14 days","If non-symptomatic, you can hang with others",
            "Check in at your local hospital", "Stay away from pets"]

        } else if (qnum == 4) {
            choicearr = ["None", "Surgical", "Gas Mask", "N95"]
        } else if (qnum == 5) {
            choicearr = ["To gradually decrease the # of cases", "To keep the economy balanced",
            "To keep the communication to a minimum", "To make the derivative of a curve as close to 0"]

        } else if (qnum == 6) {
            choicearr = ["Respiratory System", "Digestive System", "Nervous System", "Immune system"]
        } else if (qnum == 7) {
            choicearr = ["6ft", "3ft", "8ft", "12ft"]
        } else if (qnum == 8) {
            choicearr = ["Drinking Alcohol", "Resporitory Etiquette", "Hand Hygiene", "Physical Distancing"]
        }

        return choicearr;
    }

    // This function randomly puts the choices in the answer areas.
    function choiceplacer(qnum) {
        let options = choices(qnum);
        console.log(options)
        let a1 = Math.floor(Math.random() * 4);

        let a2 = Math.floor(Math.random() * 4);
        while (a2 == a1) {
            a2 = Math.floor(Math.random() * 4);
        }

        let a3 = Math.floor(Math.random() * 4);
        while (a3 == a1 || a3 == a2) {
            a3 = Math.floor(Math.random() * 4);
        }

        let a4 = Math.floor(Math.random() * 4)
        while (a4 == a1 || a4 == a2 || a4 == a3) {
            a4 = Math.floor(Math.random() * 4);
        }
        let ansarr = [a1, a2, a3, a4]
        for (i = 0; i < ansarr.length; i++) {
            if (ansarr[i] == 0) {
                corans = i;
            }
        }
        let an1, an2, an3, an4;
        let anarr = [an1, an2, an3, an4];

        for (let i = 0; i < ansarr.length; i++)
            if (ansarr[i] == 0) {
                anarr[i] = options[0];
            } else if (ansarr[i] == 1) {
            anarr[i] = options[1];
        } else if (ansarr[i] == 2) {
            anarr[i] = options[2];
        } else if (ansarr[i] == 3) {
            anarr[i] = options[3];
        }
        console.log(anarr);
        return anarr
    }

    // Variables that call the functions.
    question = questionchoice(qnum);
    console.log(qnum);
    let answerarr = choiceplacer(qnum);

    // These put the chosen question, answer and rational into the body.
    quest.innerHTML = question;
    answer1.innerHTML = answerarr[0];
    answer2.innerHTML = answerarr[1];
    answer3.innerHTML = answerarr[2];
    answer4.innerHTML = answerarr[3];

    // This function checks to see if the chosen question is the correct one.
    function guess(choice) {
        if (choice == 0) {
            if (corans == 0) {
                item2.style.borderColor = "green";
                answer1.style.color = "green";
                score = score + 5; // move on to next game.
            } else {
                answer1.style.color = "red";
                item2.style.borderColor = "red";
                if (corans == 1) {
                    answer2.style.color = "green";
                    item3.style.borderColor = "green";
                } else if (corans == 2) {
                    answer3.style.color = "green";
                    item4.style.borderColor = "green";
                } else if (corans == 3) {
                    answer4.style.color = "green";
                    item5.style.borderColor = "green";
                }
                gameOver = true;
            }
        } else if (choice == 1) {
            if (corans == 1) {
                answer2.style.color = "green";
                item3.style.borderColor = "green";
                score = score + 5;
            } else {
                answer2.style.color = "red";
                item3.style.borderColor = "red";
                if (corans == 0) {
                    item2.style.borderColor = "green";
                    answer1.style.color = "green";
                } else if (corans == 2) {
                    answer3.style.color = "green";
                    item4.style.borderColor = "green";
                } else if (corans == 3) {
                    answer4.style.color = "green";
                    item5.style.borderColor = "green";
                }
                gameOver = true;
            }
        } else if (choice == 2) {
            if (corans == 2) {
                answer3.style.color = "green";
                item4.style.borderColor = "green";
                score = score + 5;
            } else {
                answer3.style.color = "red";
                item4.style.borderColor = "red";
                if (corans == 1) {
                    answer2.style.color = "green";
                    item3.style.borderColor = "green";
                } else if (corans == 0) {
                    item2.style.borderColor = "green";
                    answer1.style.color = "green";
                } else if (corans == 3) {
                    answer4.style.color = "green";
                    item5.style.borderColor = "green";
                }
                gameOver = true;
            }
        } else if (choice == 3) {
            if (corans == 3) {
                answer4.style.color = "green";
                item5.style.borderColor = "green";
                score = score + 5;
            } else {
                answer4.style.color = "red";
                item5.style.borderColor = "red";
                if (corans == 1) {
                    answer2.style.color = "green";
                    item3.style.borderColor = "green";
                } else if (corans == 2) {
                    answer3.style.color = "green";
                    item4.style.borderColor = "green";
                } else if (corans == 0) {
                    item1.style.borderColor = "green";
                    answer1.style.color = "green";
                }
                gameOver = true;
            }
        }
        console.log(score);

        // Stops the onclick function to happen after clicking one answer.
        document.getElementById('a1').onclick = '';
        document.getElementById('a2').onclick = '';
        document.getElementById('a3').onclick = '';
        document.getElementById('a4').onclick = '';
    }
}

// Function that is used after game is done.
function endQuiz() {
    if (answerClicked == false) {
        gameOver = true;
    }
    clearInterval(nextGameTimer);
    document.body.innerHTML = "";
    clearInterval(timerbarNum);
}

/**
 * Creates the reasoning behind why the user lost and what the right answer was.
 */
function whyQuizOver() {
    return ration;
}