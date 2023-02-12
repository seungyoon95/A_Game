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

/**
 * Keeps authentication during current session.
 * source: https://firebase.google.com/docs/auth/web/auth-state-persistence
 */
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

/**
 * Used to sign up a user with email and password.
 * Sign up was adapted from: https://firebase.google.com/docs/auth/web/start
 */
function signup() {
    let username  = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (username.trim() != "" && email.trim() != "" && password.trim() != "" && confirmPassword.trim() != "") {
        if (password == confirmPassword) {
            if (password.length >= 6) {
                if (username.trim().length <= 10) {
                    firebase.auth().createUserWithEmailAndPassword(email, password).then(credential => {

                        /* Find or create a collection, add a new document with key of UID.
                        return was adapted from : https://youtu.be/qWy9ylc3f9U?t=416 */
                        
                        return db.collection('userProfile').doc(credential.user.uid).set({
                            // Set fields inside UID document in userProfile.
                            username: username,
                            score: 0
                        });
                    }).then(() => {
                        window.location.href = "menu.html";
                    }).catch(function (error) {
                        document.getElementById("signUpAlert").style.display = "inline";
                        document.getElementById("signUpAlert").innerHTML = "*" + error.message;
                        var errorCode = error.code;
                        var errorMessage = error.message;
                
                        console.log(errorCode + "\n" + errorMessage);
                    });
                } else {
                    document.getElementById("signUpAlert").style.display = "inline";
                    document.getElementById("signUpAlert").innerHTML = "*Username cannot be more than 10 characters.";
                }
            } else {
                document.getElementById("signUpAlert").style.display = "inline";
                document.getElementById("signUpAlert").innerHTML = "*Password must be 6 characters or more.";
            }
        } else {
            document.getElementById("signUpAlert").style.display = "inline";
            document.getElementById("signUpAlert").innerHTML = "*Password must match.";
        }
    } else {
        document.getElementById("signUpAlert").style.display = "inline";
        document.getElementById("signUpAlert").innerHTML = "*Fields cannot be empty.";
    }
}

/**
 * Used to login an existing user with email and password.
 * // Sign In was adapted from: https://firebase.google.com/docs/auth/web/start
 */
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email.trim() != "" && password.trim() != "") {
        
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            // On successful login, redirect to menu page.
            window.location.href = "menu.html";
        }).catch(function (error) {
            document.getElementById("loginAlert").style.display = "inline";
            document.getElementById("loginAlert").innerHTML = "*Email and password combination does not exist.";
            var errorCode = error.code;
            var errorMessage = error.message;
    
            console.log(errorCode + "\n" + errorMessage);
        });
    } else {
        document.getElementById("loginAlert").style.display = "inline";
        document.getElementById("loginAlert").innerHTML = "*Fields cannot be empty.";
    }
}
