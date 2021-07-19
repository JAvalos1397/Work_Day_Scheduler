var today = moment();

//current day
$("#currentDay").text(today.format("[Today is] dddd, MMM Do ss"));
//time gets updated
function displayTime() {
    var today = moment();
    $("#currentDay").text(today.format("[Today is] dddd, MMM Do ss"));
  
}

function minute() {
    today = moment().format("m");
    time = parseInt(today);   
    return time
}


function hour(){
    today = moment().format("H");
    time = parseInt(today);
    return time

}


function currtentTime() {
    for (let i = 24; i > -1 ; i--) {
        
        if ( hour() > i) {
            test().addClass("past")
        //   console.log(test())  
            } 
    } 

}    


// //save mechanic 







function test() {
    for (let index = 0; index < allTime.length; index++) {
        day = allTime[index].hourOfDay;
        return day;
    }
  
}


//all times
var allTime = [
    { hourOfDay: $("#12AM") },
    { hourOfDay: $("#1AM") },
    { hourOfDay: $("#2AM") },
    { hourOfDay: $("#3AM") },
    { hourOfDay: $("#4AM") },
    { hourOfDay: $("#5AM") },
    { hourOfDay: $("#6AM") },
    { hourOfDay: $("#7AM") },
    { hourOfDay: $("#8AM") },
    { hourOfDay: $("#9AM") },
    { hourOfDay: $("#11AM") },
    { hourOfDay: $("#12PM") },
    { hourOfDay: $("#1PM") },
    { hourOfDay: $("#2PM") },
    { hourOfDay: $("#3PM") },
    { hourOfDay: $("#4PM") },
    { hourOfDay: $("#5PM") },
    { hourOfDay: $("#6PM") },
    { hourOfDay: $("#7PM") },
    { hourOfDay: $("#8PM") },
    { hourOfDay: $("#9PM") },
    { hourOfDay: $("#11PM") },
    
]



//updating time
setInterval(function () {
    test()
    displayTime();
    // minute();
    hour();
    currtentTime();

}, 1000);
