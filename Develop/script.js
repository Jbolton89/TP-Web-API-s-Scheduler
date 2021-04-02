var saveBtn = $('.saveBtn');

// Handle displaying the time - Finally have the countdown working
var rightNow = function () {
    $("#currentDay").text(moment().format('MMM Do YYYY, h:mm:ss a'));
}
setInterval(rightNow, 1000);

// For sorting the rows if you want to drag meetings around
    // $("#sortable").children(".textarea").sortable({
    //     placeholder:'ui-state-highlight', 
    // });

$(".saveBtn").on('click', function () {
    var jobs = $(this).siblings('.textarea').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(jobs, time);
    console.log(jobs, time);
})

$('#hour7 .textarea').val(localStorage.getItem('hour7'));
$('#hour8 .textarea').val(localStorage.getItem('hour8'));
$('#hour9 .textarea').val(localStorage.getItem('hour9'));
$('#hour10 .textarea').val(localStorage.getItem('hour10'));
$('#hour11 .textarea').val(localStorage.getItem('hour11'));
$('#hour12 .textarea').val(localStorage.getItem('hour12'));
$('#hour13 .textarea').val(localStorage.getItem('hour13'));
$('#hour14 .textarea').val(localStorage.getItem('hour14'));
$('#hour15 .textarea').val(localStorage.getItem('hour15'));
$('#hour16 .textarea').val(localStorage.getItem('hour16'));
$('#hour17 .textarea').val(localStorage.getItem('hour17'));
$('#hour18 .textarea').val(localStorage.getItem('hour18'));
$('#hour19 .textarea').val(localStorage.getItem('hour19'));
$('#hour20 .textarea').val(localStorage.getItem('hour20'));
$('#hour21 .textarea').val(localStorage.getItem('hour21'));
$('#hour22 .textarea').val(localStorage.getItem('hour22'));

function timeChange() { 
    $(".row").each(function (){
        var timeBlock = parseInt($(this).attr("id").split('hour')[1]);
        console.log(timeBlock, rightNow)
    })
}

// $(".saveBtn").on("click", function()

// Give each hour an ID and target with time.