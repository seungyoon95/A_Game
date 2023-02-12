/**
 * Creates a leaderBoard page.
 */
function leaderBoardMain(){
    createBackButton();
    createMuteButton();
    createTable();
    getScores();
}

/**
 * Creates and appends the leaderboard.
 */
function createTable(){
    let leaderboard = document.createElement('table');
    leaderboard.id = "leaderboard";
    document.body.appendChild(leaderboard);

    let rank = document.createElement('td');
    rank.innerHTML = "Rank";
    leaderboard.appendChild(rank);

    let name = document.createElement('td');
    name.innerHTML = "Name";
    leaderboard.appendChild(name);

    let score = document.createElement('td');
    score.innerHTML = "Score";
    leaderboard.appendChild(score);
}

/**
 * Reads the top 10 items in terms of score from the DB
 * and inserts it into the leaderboard table.
 */
function getScores() {
    const userCollection = db.collection("userProfile");
    let rank = 1;

    userCollection.orderBy("score", "desc").limit(10).get().then(function(snap) {
        snap.forEach(function(doc) {
            console.log(doc.data().score);
            let lb = document.getElementById("leaderboard");
            let row = document.createElement("tr");
            let pos = document.createElement("td");
            let posValue = document.createTextNode(rank);
            pos.appendChild(posValue);
            row.appendChild(pos);
            let name = document.createElement("td");
            let nameValue = document.createTextNode(doc.data().username);
            name.appendChild(nameValue);
            row.appendChild(name);
            let score = document.createElement("td");
            let scoreValue = document.createTextNode(doc.data().score);
            score.appendChild(scoreValue);
            row.appendChild(score);
            lb.appendChild(row);
            rank++;
        });
    });
}