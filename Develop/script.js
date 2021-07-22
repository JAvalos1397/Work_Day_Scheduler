var desc = $(".description")
var today = moment();

//current day
$("#currentDay").text(today.format("[Today is] dddd, MMM Do"));
//time gets updated
function displayTime() {
    var today = moment();
    $("#currentDay").text(today.format("[Today is] dddd, MMM Do"));

}

//save feature

$('.saveBtn').on('click', function () {

    var value = $(this).siblings(".description").val()
    var time = $(this).siblings(".description").attr('id')

    console.log(value)
    console.log(time);
    localStorage.setItem(time, value)

})
function displayEvent() {
    for (let i = 0; i < 9; i++) {
        var hourOfDay = $(desc[i]).attr('id');
        
        console.log(hourOfDay);

        var events = "#" + hourOfDay
        console.log(events);

        $(events).val(localStorage.getItem(hourOfDay))
    }
}
// $('#hour-0 .description').val(localStorage.getItem("hour-0"))

displayEvent()






function hour() {
    today = moment().format("H");
    time = parseInt(today);
    return time
}

function currtentTime() {
    var timeBlocks = $(".colorCode")
    // console.log(timeBlocks)
    for (let i = 0; i < 9; i++) {
        index = parseInt(timeBlocks[i].id);
        console.log(index)
        if (index < hour()) {
            console.log("past", index)
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
}, 1200000); //repeats every 20min
