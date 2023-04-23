// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function scheduleTime() {
    // var time= moment();
  // Set the day and time of the header//
  // var today = dayjs();
  // var time = today.format('H');
  // console.log(time);
// });
var today =dayjs();
// $('#currentDay').text(today.format('dddd, MMMM D, YYYY, h:mm'));
$("#currentDay").text(today.format('dddd, MMMM D, YYYY h:mm A'));


var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

// // Creating the hour variable//
// var nineAm = $("#9am");
// var tenAm = $("#10am");
// var elevenAm = $("#11am");
// var  twelvePm = $("#12pm");
// var  onePm = $("#1pm");
// var  twoPm = $("#2pm");
// var  threePm = $("#3pm");
// var  fourPm = $("#4pm");
// var fivePm = $("#5pm");

// var hour = moment().hours();
// var userInput;
// var hourSpan;
// var nineAm;

// function initPage() {

//   console.log("Current Hour " + hour);
//   var init9 = JSON.parse(localStorage.getItem("09:00 am"));
//   nineAm.val(init9);
// }

// function background () {


  function initPage() {

    console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(init9);
  }
      
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
//      console.log(this);
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  })
//  changing textarea to descriptoin
  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".description").val().trim();
    console.log(userInput);
    hourSpan = $(this).parent().attr("id").trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })

  // This gets the information from the consol log and puts it in the //
  // in the text area. So it saves the work//
  let timeBlockEl = $(".time-block");
  let timeBlockText = $(".description");


  timeBlockText.each(function () {
    let timeBlockId = $(this).parent().attr("id");
    let savedDescription = localStorage.getItem(timeBlockId);
    if (savedDescription) {
      $(this).val(savedDescription);
    }
  });

  // This is an event listenr for the clear button//
  // It will clear the inputs from the consol logs//

  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });


  // $("#9am").val(localStorage.getItem("text-center"));
  // $("#10am").val(localStorage.getItem("10AM"));
  // $("#3pm").val(localStorage.getItem("3PM"));
  // $("#4pm").val(localStorage.getItem("4PM"));

  // console.log(this);
  // var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
  // var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

  // //set items in local storage.
  // localStorage.setItem(time, text);



  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log( blockHour, currentHour)
  });




// // not needed
// const txt1 = document.getElementById(".hour-");
// const textarea = document.getElementById("id");
// const out1 = document.getElementById(".description");

//   function fun1(){
//     out1.innerHtml= txt1.value;
//   }
//   btn1.addEventListener('click',fun1);


//   for(var i=9; i <=17; i++){
//     // var x=i % 12;
//     // var amorpm = (i/12) > 1 ? "pm": "am"; 
//     // console.log (x);
//     console.log (localStorage.getItem("hour-"+i))
//     // $("#"+x+amorpm).val(localStorage.getItem("hour-"+i))
//     $("#"+i).val(localStorage.getItem("textarea"))
// }

   
  //  for(var i=9; i <=17; i++){
  //   $("#"+i).val(localStorage.getItem("hour-"+i))

  // }

  // $(".time-block").each(function () {
  //   var blockHour = parseInt($(this).attr("id").split("hour")[1]);
  //   console.log( blockHour, currentHour)
  // }


  // $(".saveBtn").click(function (event) {
  //   event.preventDefault();
  //   var value = $(this).siblings(".time-block").val();
  //   var time = $(this).parent().attr("description").split("-")[1];
  //   localStorage.setItem(time, value);
  // });

  // for(var i=1; i <=12; 1++){


  // } 
// };







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
  // });




//   // Get the current hour in 24-hour format using Day.js
// var currentHour = dayjs().hour();

// // Loop through all time blocks and apply the appropriate class
// $(".time-block").each(function() {
//   var blockHour = parseInt($(this).attr("id").split("-")[1]);

//   if (blockHour < currentHour) {
//     $(this).addClass("row time-block past");
//   } else if (blockHour === currentHour) {
//     $(this).addClass("row time-block present");
//   } else {
//     $(this).addClass("row time-block future");
//   }
// });
 
// console.log(blockHour)
// Add click event listener to save button
// $("#saveBtn").on("click", function() {
//   // Get the text value and hour of the textarea that corresponds to the clicked save button
//   var textValue = $(this).siblings("textarea").val();
//   var hour = $(this).parent().attr("id").split("-")[1];

//   // Save the text value and hour to local storage
//   localStorage.setItem("hour-" + hour, textValue);
//   console.log(textValue);
//   console.log(hour);
