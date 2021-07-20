var today = moment();

//current day
$("#currentDay").text(today.format("[Today is] dddd, MMM Do ss"));
//time gets updated
function displayTime() {
    var today = moment();
    $("#currentDay").text(today.format("[Today is] dddd, MMM Do ss"));
  
}

//save feature
var upper = $('.textArea');




















function hour(){
    today = moment().format("H");
    time = parseInt(today);
    return time
}

function currtentTime() {
    var timeBlocks= $(".colorCode")
    // console.log(timeBlocks)
    for (let i = 0; i < timeBlocks.length ; i++) {
        index = parseInt(timeBlocks[i].id);
        // timeID = "#" +timeBlocks[i].id  
        if (index < hour()) {
            // console.log("past", index)
            $(timeBlocks[i]).addClass('past');
        } else if (index === hour()) {
            // console.log("present", index);
            $(timeBlocks[i]).addClass('present');
        } else if (index > hour()) {
            console.log("future", index)
            // $("#12").addClass('future')
            $(timeBlocks[i]).addClass('future');
        }        
    } 
}    

currtentTime()

//updating time
setInterval(function () {
    displayTime();
    hour();
    currtentTime();

}, 1000);
