let clicked = false;
let teg;

/**
 * Activates the easter egg when the user taps/clicks on teg's picture.
 */
function turnOnEasteregg() {
    if (clicked == false) {
        easterEgg = true;
        let aboutTextEaster = document.getElementById("aboutText");
        aboutTextEaster.className = "aboutTextEaster";
        changeFaces();
        clicked = true;
    }
}

/**
 * Changes the images of every member to teg's picture.
 */
function changeFaces() {
    document.getElementById("kevinS").src = "images/tegSneeze.png";
    document.getElementById("kevinL").src = "images/tegSneeze.png";
    document.getElementById("fraser").src = "images/tegSneeze.png";
    document.getElementById("jack").src = "images/tegSneeze.png";
}