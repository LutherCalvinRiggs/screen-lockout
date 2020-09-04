/* Family lockout countdown timer */

// prompt window asks for message and timer amount
function getMessageTimer() {
    let countdown;
    let message = prompt("What message would you like to send?");
    
    // check to see if the user input a message or cancelled
    if (message){ 
        countdown = Math.round( 
                +( prompt( "How manny minutes do you want on the clock?" ) )
            );
        let inputArray = [message, countdown];
        return inputArray;
        // countdown is an integar, rounded to the nearest whole value
    };
    return inputArray;
};

// create and design the popup message and timer
function createPopUp(inputArray) {
    // create and id the popup window components
    let alertOverlay = document.createElement('div');
        alertOverlay.id = 'alert-overlay';
    let alertBox = document.createElement('div');
        alertBox.id = 'alert-box';
    let messageBox = document.createElement('div');
        messageBox.id = 'message-box';
    let timerBox = document.createElement('div');
        timerBox.id = 'timer-box';
    
    // overlay css
    alertOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    alertOverlay.style.position = "absolute";
    // position child elements
    alertOverlay.style.display = "flex";
    alertOverlay.style.flexDirection = "column";
    alertOverlay.style.justifyContent = "center";
    alertOverlay.style.alignItems = "center";
    alertOverlay.style.textAlign = "center";
    // adjust for browser resize and scroll
    alertOverlay.style.width = window.innerWidth + "px";
    alertOverlay.style.height = window.innerHeight + "px";
    alertOverlay.style.top = window.pageYOffset + "px";
    alertOverlay.style.left = window.pageXOffset + "px";

    // message box css
    alertBox.style.width = "40%";
    alertBox.style.padding = "30px";
    alertBox.style.backgroundColor = "black";
    alertBox.style.border = '5px solid red';

    // message font styles
    messageBox.style.fontSize = "3rem";
    messageBox.style.color = "white";

    // timer font styles
    timerBox.style.fontSize = "3rem";
    timerBox.style.color = "white";

    // reset the message and the timer
    messageBox.textContent = "";
    timerBox.textContent = "";

    // convert the amount of time `inputArray[1]` to minutes on a clock

    // insert the message and the timer
    messageBox.textContent = inputArray[0];
    timerBox.textContent = inputArray[1];

    // assemble the popup window
    alertBox.appendChild(messageBox);
    alertBox.appendChild(timerBox);
    alertOverlay.appendChild(alertBox);

    // return the popup window
    return alertOverlay;
};

function fiveSecondPause() {
    // after 5 seconds, the message and timer will shrink to the lower left corner of the screen and take up 200px in width with an equivalent aspect ratio. can the font shrink as well using an 'em' or 'rem' measurement?
    setInterval();
};


// Main function
document.addEventListener('click', (e) => {
    // prompt window asks for message and timer amount
    let inputArray = getMessageTimer();
    
    // create and design the popup message and timer
    let popUpWindow = createPopUp(inputArray);
    // append popUpWindow to the document
    document.querySelector("body").appendChild(popUpWindow);

    window.addEventListener('scroll', (e) => {
        let alertOverlay = e.target.getElementById('alert-overlay');
        alertOverlay.style.top = window.pageYOffset + "px";
        alertOverlay.style.left = window.pageXOffset + "px";
    }, false);

    // pause for 5 seconds
    fiveSecondPause();

    // shrink timer and start clock
    shrinkAndCount();

    // enlarge window and blackout screen
    growAndFlash();

    // the alert message and timer will stay in the bottom left corner until until the timer runs out. then it will grow back to its original size and the background color will become 100% opaque over the corse of 5 seconds. 

    // finally, a prompt will arrive asking for a password to deactivate the lockdown. when the password is entered, everything disappears  
    deactivateLockdown();


});

 





