/**
 * This function will save the score in the user's database.
 * Database code snippet was adapted from: https://youtu.be/qWy9ylc3f9U?t=707
 */
function saveScoreDB(thisScore) {
    // Gets DB score and comapares with current score.
    // If current score > DB score, DB score gets updated.
    let dbScore;
    db.collection("userProfile").doc(currentUser.uid).get().then(function(doc) {
        dbScore = doc.data().score;
    }).then(function() {
        if (thisScore > dbScore)
        db.collection("userProfile").doc(currentUser.uid).update({
            score: thisScore
        });
    });
}