var today = moment();

//current day
$("#currentDay").text(today.format("[Today is] dddd, MMM Do ss"));
//time gets updated
function displayTime() {
    var today = moment();
    $("#currentDay").text(today.format("[Today is] dddd, MMM Do ss"));
  
}

//save feature

function test(){
    var events = $('.textArea');
console.log(events[1].value)
}
// $('.saveBtn').addEventListener('click', function(){
//     console.log("true")
// })


















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
        if (index < hour()) {
            // console.log("past", index)
            $(timeBlocks[i]).addClass('past');
        } else if (index === hour()) {
            // console.log("present", index);
            $(timeBlocks[i]).addClass('present');
        } else if (index > hour()) {
            // console.log("future", index)
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
    test()
}, 1000);
