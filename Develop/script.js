var today = moment();

//current day
$("#currentDay").text(today.format("[Today is] dddd, MMM Do ss"));
//time gets updated
function displayTime() {
    var today = moment();
    $("#currentDay").text(today.format("[Today is] dddd, MMM Do ss"));
  
}


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
            console.log(index)
            index.addClass('past');
        }


        
    } 

}    

currtentTime()

//updating time
setInterval(function () {
    // test()
    displayTime();
    // minute();
    hour();
    // currtentTime();

}, 1000);
