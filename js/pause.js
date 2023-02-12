/**
 * The sound effects for the pause buttons.
 */
let pauseSFX = document.createElement("AUDIO");
pauseSFX.src = "audio/buttonClick.mp3";

/**
 * Display the pause menu when called and creates the pause button.
 */
function createPauseMenu() {
    let menuBackground = document.createElement("div");
    menuBackground.id = "pauseMenu";
    menuBackground.style.display = "none";
    document.body.append(menuBackground);

    let menuResume = document.createElement("button");
    menuResume.id = "menuResume";
    menuResume.innerHTML = "Resume";
    menuBackground.appendChild(menuResume);
    

    let menuQuit = document.createElement("button");
    menuQuit.id = "menuQuit";
    menuQuit.innerHTML = "Quit";
    menuQuit.onclick = function() {
        document.body.innerHTML = "";
        mainMenu();
    }
    menuBackground.appendChild(menuQuit);
    
    // The pause button.
    let pauseBtnContainer = document.createElement("span");
    pauseBtnContainer.className = "tooltipContainer";

    let pausebtn = document.createElement("img");
    pausebtn.src = "images/pause.png";
    pausebtn.id = "pausebtn";
    pausebtn.setAttribute("draggable", "false");
    pausebtn.addEventListener("click", () => {
        pauseSFX.play();
    })

    document.body.append(pauseBtnContainer);
    pauseBtnContainer.appendChild(pausebtn);

    // The tooltip.
    let pauseTooltip = document.createElement("span");
    pauseTooltip.innerHTML = "Pause";
    pauseTooltip.className = "tooltip";
    let leftPause =  window.getComputedStyle(pausebtn).getPropertyValue("left");
    pauseTooltip.style.left = leftPause;
    pauseTooltip.style.transform = "translateX(-50%)";

    pauseBtnContainer.appendChild(pauseTooltip);
}