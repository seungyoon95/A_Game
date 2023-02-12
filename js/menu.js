let bobbing;
let audioMuted = false;
let easterEgg = false;
mainMenu();

/**
 * Creates a main menu page.
 */
function mainMenu() {
    clearInterval(bobbing);
    createShareButtons();
    document.body.id = "mainMenuBody"
    createIndexHTML();
    createButtons();
    textBobbing();
}

// Play text bobbing.
function textBobbing() {
    document.getElementById("playText").style.fontSize = "30px";
    bobbing = setInterval(function () {
        let playText = document.getElementById("playText");
        if (playText.style.fontSize == "30px") {
            playText.style.fontSize = "20px";
        } else {
            playText.style.fontSize = "30px";
        }
    }, 1000);
}

/**
 * Background music.
 */
let backgroundMusic = document.createElement("AUDIO");
backgroundMusic.src = "audio/backgroundMusicM.mp3";
backgroundMusic.loop = true;

/**
 * Readying game start soundFX.
 */
let gameStartFX = document.createElement("AUDIO");
gameStartFX.src = "audio/startSound.mp3";

/**
 * Starts the game when the user taps on the body of the index.
 */
function startGame() {
    gameStartFX.play();
    document.body.innerHTML = "";
    clearInterval(bobbing);
    nextGamePage();
    // Check if user is logged in
    checkLogin();
}

/**
 * Creates and appends a div tag to store the game name and  text.
 */
function createIndexHTML() {
    let bg = document.createElement('video');
    bg.id = "myVideo";
    bg.src = "images/background.mp4";
    bg.autoplay = true;
    document.body.appendChild(bg);

    let screen = document.createElement('div');
    screen.id = "clickArea";
    document.body.appendChild(screen);
    screen.onclick = startGame;

    let title = document.createElement('img');
    screen.appendChild(title);
    title.src = "images/title2.png";
    title.id = "gameName";

    let text = document.createElement('p');
    screen.appendChild(text);
    text.innerHTML = "Click anywhere to play!";
    text.id = "playText";

    let about = document.createElement('div');
    document.body.appendChild(about);
    about.id = "aboutOverlay";
    about.innerHTML = 
    `
    <p id="aboutText" data-text="Hi! Welcome to A_Game, a game designed by BCIT CST students.
    Self-isolation can be stressful. We aimed to provide a fun and silly
    way to educate and destress during the weeks of social-distancing. We
    hope to entertain you and reinforce some safe practices about the COVID-19
    pandemic. Have fun, and stay safe! >:)">
        Hi! Welcome to A_Game, a game designed by BCIT CST students.
        Self-isolation can be stressful. We aimed to provide a fun and silly
        way to educate and destress during the weeks of social-distancing. We
        hope to entertain you and reinforce some safe practices about the COVID-19
        pandemic. Have fun, and stay safe! >:)
    </p>
    <button onclick="aboutOk()" id="aboutOk">Ok</button>
    <div id="aboutImages">
        <img src="images/kevinS.png" id="kevinS">
        <img src="images/kevinL.png" id="kevinL">
        <img src="images/teg.png" id="teg">
        <img src="images/fraser.png" id="fraser">
        <img src="images/jack.png" id="jack">
    </div>
    `;
    teg = document.getElementById("teg");
    about.style.zIndex = 5;
    if (easterEgg == true){
        turnOnEasteregg();
    } else {
        teg.onclick = turnOnEasteregg;
    }
}

/**
 * Sound yes button.
 */
function soundOk() {
    backgroundMusic.play();
    document.getElementById("soundOverlay").style.display = "none";
}

/**
 * About exit button.
 */
function aboutOk() {
    document.getElementById("aboutOverlay").style.display = "none";
}

/**
 * Creates the social media share buttons and container.
 */
function createShareButtons(){
    let shareContainer = document.createElement('div');
    shareContainer.id = "shareContainer"
    document.body.appendChild(shareContainer);

    /**
     * Adapted from https://developers.facebook.com/docs/plugins/share-button/.
     */
    let fbShare = document.createElement('div');
    fbShare.id = "fb";
    fbShare.innerHTML ='<div id="fb"><div class="fb-share-button fb_iframe_widget fb_iframe_widget_fluid" data-size="large" data-href="http://www.kevinsong.info/a_game/" data-layout="button_count" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&amp;container_width=77&amp;href=http%3A%2F%2Fwww.kevinsong.info%2Fa_game%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;size=large"><span style="vertical-align: bottom; width: 88px; height: 28px;"><iframe name="f7c24845d0392" width="1000px" height="1000px" data-testid="fb:share_button Facebook Social Plugin" title="fb:share_button Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v3.0/plugins/share_button.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df71fa971eae5d8%26domain%3D%26origin%3Dfile%253A%252F%252F%252Ff2235ef30fafc58%26relation%3Dparent.parent&amp;container_width=77&amp;href=http%3A%2F%2Fwww.kevinsong.info%2Fa_game%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;size=large" style="border: none; visibility: visible; width: 88px; height: 28px;" class=""></iframe></span></div></div>';
    shareContainer.appendChild(fbShare);

    /**
     * Adapted from https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview.
     */
    let twitterShare = document.createElement('div');
    twitterShare.id = "twitter";
    twitterShare.innerHTML = '<div id="twitter"><iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="twitter-share-button twitter-share-button-rendered twitter-tweet-button" style="position: static; visibility: visible; width: 76px; height: 28px;" title="Twitter Tweet Button" src="https://platform.twitter.com/widgets/tweet_button.2a008290075125adde2d7b849b06a0bb.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=file%3A%2F%2F%2FC%3A%2FUsers%2Ftegva%2FDocuments%2FTerm%25201%2FCOMP-2800%2FA_Game%2FCOMP-2800-BBY-03-A_Game%2Fmenu.html&amp;size=l&amp;text=Play%20A_Game(literally...)%20at%20kevinsong.info%2Fa_game%20to%20learn%20more%20about%20Covid-19!&amp;time=1590091072135&amp;type=share&amp;url=file%3A%2F%2F%2FC%3A%2FUsers%2Ftegva%2FDocuments%2FTerm%25201%2FCOMP-2800%2FA_Game%2FCOMP-2800-BBY-03-A_Game%2Fmenu.html"></iframe></div>';
    shareContainer.appendChild(twitterShare);
}

/**
 * Creates the learderboard, about, mute buttons.
 */
function createButtons() {
    createLeaderboardButton();
    createAboutButton();
    createMuteButton();
    createProfileButton();
}
