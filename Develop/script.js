var saveBtn = $('.saveBtn');

// Handle displaying the time - Finally have the countdown working
var rightNow = function () {
    $("#currentDay").text(moment().format('MMM Do YYYY, h:mm:ss a'));
}
setInterval(rightNow, 1000);

// For sorting the rows
$(function () {
    $("#sortable").children(".textarea").sortable(
        placeholder,'ui-state-highlight',
    )   
    },
)
// why doesnt this work? Now the whole area doesnt work

$(".savebtn").on('click', function () {
    console.log(this);
})


// Tryign to make the middle columns sortable 

// $(".saveBtn").on("click", function()

// Give each hour an ID and target with time.