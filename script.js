var millisecond = 0;
var seconds = 0;
var minutes = 0;

var displayMillisecond = "0";
var displaySeconds = "0";
var displayMinutes = "0";


let interval = null;

function startStopwatch(){
    resetClock();
    interval = window.setInterval(stopWatch, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}

function stopStopwatch(){
    window.clearInterval(interval);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}

function resetClock() {
    millisecond = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById("display").innerHTML = "00:00:00";
}

function stopWatch(){
    millisecond++;

    if(millisecond === 99){
        seconds++;
        millisecond = 0;
        if (seconds == 60){
            minutes++;
            seconds = 0;
        }
    }

    addLeadingZero();
    document.getElementById("display").innerHTML = `${displayMinutes}:${displaySeconds}:${displayMillisecond}`;
}

function addLeadingZero(){
    if(millisecond < 10){
        displayMillisecond = "0" + millisecond.toString();
    }
    else {
        displayMillisecond = millisecond.toString();
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

