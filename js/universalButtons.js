/**
 * Create and append mute button.
 */
function createLeaderboardButton(){
    let leaderboardBtnContainer = document.createElement("span");
    leaderboardBtnContainer.className = "tooltipContainer";

    let leaderboard = document.createElement('img');
    leaderboard.id = "leaderboardButton";
    leaderboard.src = "images/leaderboard.png";
    leaderboard.onclick = leaderboardButton;
    
    document.body.appendChild(leaderboardBtnContainer);
    leaderboardBtnContainer.appendChild(leaderboard);

    // The tooltip.
    let leaderboardTooltip = document.createElement("span");
    leaderboardTooltip.innerHTML = "Leaderboard";
    leaderboardTooltip.className = "tooltip";
    let rightleaderboard =  window.getComputedStyle(leaderboard).getPropertyValue("right");
    leaderboardTooltip.style.right = rightleaderboard;

    leaderboardBtnContainer.appendChild(leaderboardTooltip);
}

/**
 * Leaderboard button onclick function.
 * Redirects to leaderboard.html.
 */
function leaderboardButton() {
    document.body.innerHTML = "";
    clearInterval(bobbing);
    leaderBoardMain();

    //The sfx.
    let leaderboardSFX = document.createElement("AUDIO");
    leaderboardSFX.src = "audio/buttonClick.mp3";
    leaderboardSFX.play();
}

/**
 * Creates and appends About button.
 */
function createAboutButton(){
    let aboutBtnContainer = document.createElement("span");
    aboutBtnContainer.className = "tooltipContainer";

    let about = document.createElement('img');
    about.id = "aboutButton";
    about.src = "images/about.png";
    about.onclick = aboutButton;

    document.body.appendChild(aboutBtnContainer);
    aboutBtnContainer.appendChild(about);

    // The tooltip.
    let aboutTooltip = document.createElement("span");
    aboutTooltip.innerHTML = "About";
    aboutTooltip.className = "tooltip";
    let rightAbout =  window.getComputedStyle(about).getPropertyValue("right");
    aboutTooltip.style.right = rightAbout;

    aboutBtnContainer.appendChild(aboutTooltip);
}

/**
 * About button onclick function.
 */
function aboutButton() {
    document.getElementById("aboutOverlay").style.display = "block";
    //The sfx.
    let aboutSFX = document.createElement("AUDIO");
    aboutSFX.src = "audio/buttonClick.mp3";
    aboutSFX.play();
}

/**
 * Creates and appends mute button.
 */
function createMuteButton(){
    let muteBtnContainer = document.createElement("span");
    muteBtnContainer.className = "tooltipContainer";

    let mute = document.createElement('img');
    mute.id = "muteButton";
    if(audioMuted == true){
        mute.src = "images/muted.png";
    } else {
        mute.src = "images/mute.png";
    }
    mute.onclick = function() {
        if (backgroundMusic.paused) {
            document.getElementById("muteButton").src = "images/mute.png";
            backgroundMusic.play();
            audioMuted = false;
        } else {
            document.getElementById("muteButton").src = "images/muted.png";
            backgroundMusic.pause();
            audioMuted = true;
        }

        //The sfx.
        let muteSFX = document.createElement("AUDIO");
        muteSFX.src = "audio/buttonClick.mp3";
        muteSFX.play();
    };
    document.body.appendChild(muteBtnContainer);
    muteBtnContainer.appendChild(mute);

    // THe tooltip.
    let muteTooltip = document.createElement("span");
    muteTooltip.innerHTML = "Mute";
    muteTooltip.className = "tooltip";
    let rightProfile =  window.getComputedStyle(mute).getPropertyValue("right");
    muteTooltip.style.right = rightProfile;

    muteBtnContainer.appendChild(muteTooltip);
}

/**
 * Creates and appends profile button.
 */
function createProfileButton(){
    let profileBtnContainer = document.createElement("span");
    profileBtnContainer.className = "tooltipContainer";

    let profile = document.createElement('img');
    profile.id = "profileButton";
    profile.src = "images/profile.png";
    profile.onclick = function(){
        profileMain();
        // The sfx.
        let profileSFX = document.createElement("AUDIO");
        profileSFX.src = "audio/buttonClick.mp3";
        profileSFX.play();
    } ;

    document.body.appendChild(profileBtnContainer);
    profileBtnContainer.appendChild(profile);

    // The tooltip.
    let profileTooltip = document.createElement("span");
    profileTooltip.innerHTML = "Profile";
    profileTooltip.className = "tooltip";
    let rightProfile =  window.getComputedStyle(profile).getPropertyValue("right");
    profileTooltip.style.right = rightProfile;

    profileBtnContainer.appendChild(profileTooltip);
}

/**
 * Creates and appends back button.
 */
function createBackButton(){
    let backButton = document.createElement('button');
    backButton.id = "backButton";
    backButton.innerHTML = "Back";
    backButton.onclick = backButtonClick;
    document.body.appendChild(backButton);
    clicked = false;
}

/**
 * Back button onclick function.
 * Redirects to index.html.
 */
function backButtonClick() {
    document.body.innerHTML = "";
    mainMenu();

    //The sfx.
    let backSFX = document.createElement("AUDIO");
    backSFX.src = "audio/buttonClick.mp3";
    backSFX.play();
}
