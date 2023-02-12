// Your web app's Firebase configuration.
/**
 * CDN source: https://console.firebase.google.com/project/a-game-9c74b/settings/general/web:NWVhYjQwY2MtMDNlYy00OGU5LWFkMTEtYjYwMTI5MzY5MGQ0
 */
var firebaseConfig = {
    apiKey: PROCESS.ENV.API_KEY,
    authDomain: PROCESS.ENV.AUTH_DOMAIN,
    databaseURL: PROCESS.ENV.DATABASE_URL,
    projectId: PROCESS.ENV.PROJECT_ID,
    storageBucket: PROCESS.ENV.STORAGE_BUCKET,
    messagingSenderId: PROCESS.ENV.MESSAGING_SENDER_ID,
    appId: PROCESS.ENV.APP_ID
};
// Initialize Firebase.
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const userCollection = db.collection("userProfile");
let profileName;
let profileScore;
let profileEmail;
let currentUser;

/**
 * Creates profile page.
 */
async function profileMain() {
    clearInterval(bobbing);
    await checkLogin();
    userCollection.doc(currentUser.uid).get().then(function(doc) {
        profileName = doc.data().username;
        profileScore = doc.data().score;
        profileEmail = currentUser.email;
    }).then(function() {
        document.body.innerHTML = "";
        createBackButton();
        createMuteButton();
        createProfilePage();
    });
}

/**
 * Check if the user has logined or not.
 * AuthStateChanged was adapted from: https://firebase.google.com/docs/auth/web/start
 */
function checkLogin() {
    //Displays information based on user login info, gets called when ever user login state changes.
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var email = user.email;
            currentUser = user;
        } else {
            // No user is signed in.
            alert("Please login!");
            window.location.href = "index.html";
        }
    });
}

/**
 * Reset score function.
 */
async function scoreReset() {
    await userCollection.doc(currentUser.uid).update(
        {
            score: 0,
        }
    );
    let newScore;
    userCollection.doc(currentUser.uid).get().then(function(doc) {
        newScore = doc.data().score;
    }).then(function() {
        document.getElementById("userScore").innerHTML = "High score: " + newScore;
    });
}

/**
 * Delete account function.
 */
async function deleteInfo() {
    await userCollection.doc(currentUser.uid).delete();
    await firebase.auth().currentUser.delete();
    window.location.href = "index.html";
}

/**
 * Creates profile page elements.
 */
function createProfilePage() {
    let container = document.createElement('div');
    container.id = "profileContainer";
    document.body.appendChild(container);

    let username = document.createElement('p');
    username.innerHTML = "Username: " + profileName;;
    username.id = "displayName";
    container.appendChild(username);

    let userEmail = document.createElement('p');
    userEmail.innerHTML = "Email: " + profileEmail;
    userEmail.id = "userEmail";
    container.appendChild(userEmail);

    let userScore = document.createElement('p');
    userScore.innerHTML = "High score: " + profileScore;
    userScore.id = "userScore";
    container.appendChild(userScore);

    let resetScore = document.createElement('button');
    resetScore.innerHTML = "Reset Score";
    resetScore.id = "resetScore";
    
    resetScore.onclick = scoreReset;
    container.appendChild(resetScore);

    let deleteAccount = document.createElement('button');
    deleteAccount.innerHTML = "Delete Account";
    deleteAccount.id = "deleteAccount";
    deleteAccount.onclick = deleteInfo;
    container.appendChild(deleteAccount);

    /**
     * Blinker function.
     */
    setInterval(function() {
        displayScore = document.getElementById("userScore");
        if (displayScore.style.backgroundColor == "yellow") {
            displayScore.style.backgroundColor = "";
        } else {
            displayScore.style.backgroundColor = "yellow";
        }
    }, 1000);
}