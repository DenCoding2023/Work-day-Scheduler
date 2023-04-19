// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function scheduleTime() {
    // var time= moment();
  // Set the day and time of the header//
  var today = dayjs();
  var time = today.format('H');
  console.log(time);

// $('#currentDay').text(today.format('dddd, MMMM D, YYYY, h:mm'));
$('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'));



// Creating the hour variable//
var now 

let schedule9am = $("#hour-9");
let schedule10am = $("#hour-10");
let schedule11am = $("#hour-11");


let scheduleElArray = [
  schedule9am,
  schedule10am,
  schedule11am,
  schedule12pm,
  schedule1pm,
  schedule2pm,
  schedule3pm,
  schedule4pm,
  schedule5pm,
];

renderLastRegistered();
updateTime();
setInterval(updateTime, 1000); 

// render schedule saved in local storage
function renderLastRegistered() {
  for (let el of scheduleElArray) {
      el.val(localStorage.getItem("time block " + el.data("hour")));

  }
}








// var savebtnEvent =$('btn saveBtn col-2 col-md-1');

// savebtnEvent.on('click', function () {
//   alert('Hello World');
// });
// console.log(savebtnEvent);




// var hour = moment().hours();
// var userInput;
// var hourSpan;

// var interval = setInterval(function() {
//   var momentNow = moment();
//   $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
//                       + momentNow.format('dddd')
//                        .substring(0,3).toUpperCase());
//   $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
// }, 100);

// }

// function initPage() {

//   console.log("Current Hour " + hour);
//   var init9 = JSON.parse(localStorage.getItem("09:00 am"));
//   nineAm.val(init9);

  // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });




  // Get the current hour in 24-hour format using Day.js
var currentHour = dayjs().hour();

// Loop through all time blocks and apply the appropriate class
$(".time-block").each(function() {
  var blockHour = parseInt($(this).attr("id").split("-")[1]);

  if (blockHour < currentHour) {
    $(this).addClass("row time-block past");
  } else if (blockHour === currentHour) {
    $(this).addClass("row time-block present");
  } else {
    $(this).addClass("row time-block future");
  }
});
 
console.log(blockHour)