const daysval = document.getElementById("days");
const hoursval = document.getElementById("hours");
const minutesval = document.getElementById("mins");
const secondsval = document.getElementById("secs");

document.getElementById("secs").onchange = () =>{startcount();};

// Change Background
let imgButton = document.getElementById("fileupload");

imgButton.onchange = () =>{
    let reader = new FileReader();
    reader.readAsDataURL(imgButton.files[0]);
    reader.onload = () => {
        document.body.style.backgroundImage = "url(" + imgButton.files[0].name + ")";
    }
}
//------------------------------------------------------------------------------------------------

let interval;

function startcount(){
    // add trappings
    interval = setInterval(() => {
        countdown();
    }, 1000)
   
}

function countdown() {
    let days = daysval.value;
    let hours = hoursval.value; 
    let mins = minutesval.value; 
    let seconds = secondsval.value;

    // if(isNaN(seconds) || isNaN(days)|| isNaN(mins)||isNaN(days)) return
    // console.log(seconds,mins,hours,days); 

    if(seconds > 0){
        seconds = seconds - 1;
    }

    if(seconds === 0 && mins > 0){
        seconds = 59;
        mins = mins - 1;
    }

    if((mins === 0 || isNaN(mins)) && hours > 0){
        mins = 59;
        hours = hours - 1;
    }

    if((hours === 0 || isNaN(mins)) && days > 0 ){
        hours = 24;
        days = days - 1;
    }

    if(days === 0 || isNaN(days)){
        days = 0;
    }

    secondsval.value = (seconds.toString().length) === 2 ? seconds : `0${seconds}`;
    minutesval.value = (mins.toString().length) === 2 ? mins : `0${mins}`;
    hoursval.value = (hours.toString().length) === 2 ? hours : `0${hours}`;
    daysval.value = (days.toString().length) === 2 ? days : `0${days}`;

    if(seconds === 0 && mins === 0 && hours === 0 && days === 0){
        clearInterval(interval);
    }
}