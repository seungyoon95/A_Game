/**
 * Back to login onclick.
 * Redirects user back to login back.
 */
function backToLogin() {
    window.location.href = "index.html";
}

/**
 * Create about us overlay.
 */
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

/**
 * About exit button.
 */
function aboutOk() {
    document.getElementById("aboutOverlay").style.display = "none";
}

createAboutButton();