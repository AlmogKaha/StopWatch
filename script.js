var milseconds = 0;
var seconds = 0;
var minutes = 0;

var displayMilseconds = "0";
var displaySeconds = "0";
var displayMinutes = "0";

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let stopwatchRunning = false;

function stopWatch(){
    milseconds++;

    if(milseconds === 1000){
        seconds++;
        milseconds = 0;
        if (seconds == 60){
            minutes++;
            seconds = 0;
        }
    }

    addLeadingZero();
    document.getElementById("display").innerHTML = `${displayMinutes}:${displaySeconds}:${displayMilseconds}`;
}

function addLeadingZero(){
    if(displayMilseconds < 10){
        displayMilseconds = "00" + milseconds.toString();
    }
    else if (displayMilseconds < 100){
        displayMilseconds = "0" + milseconds.toString();
    }
    else {
        displayMilseconds = milseconds.toString();
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
}

function startStopwatch(){
    interval = window.setInterval(stopWatch, 1);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}

function stopStopwatch(){
    window.clearInterval(interval);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}