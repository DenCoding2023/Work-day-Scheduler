// Set the day fomart with AM or PM//
var today =dayjs();

$("#currentDay").text(today.format('dddd, MMMM D, YYYY h:mm A'));

  function initPage() {

    // console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(init9);
  }
     
  function getTimeStatus(hour) {
    // NOTES: getting the hour from each time block
    var currentHour = dayjs().format("hA");
    // console.log("currentHour: ", currentHour);

    if (hour.localeCompare(currentHour) === -1) {
      return "past";
    } else if (hour.localeCompare(currentHour) === 0) {
      return "present";
    } else if (hour === "9AM" && currentHour.localeCompare("9AM") === -1) {
      return "past";
    } else {
      return "future";
    }
  }


  // This will control the time designation and color for each block//
  $(".time-block").each(function () {
    var hour = $(this).find(".hour-").text();
    var status = getTimeStatus(hour);
    // console.log("hour-: ", hour);
    $(this)
      .find(".description")
      .removeClass("past present future")
      .addClass(status);
  });

  // Set status of time blocks after the final hour of the day to "past"
  var finalHour = dayjs("6PM", "hA");
  var currentHour = dayjs();
  // console.log("currentHour: ", currentHour);
  if (currentHour.isAfter(finalHour)) {
    $(".time-block")
      .find(".description")
      .removeClass("present future")
      .addClass("past");
  }

  // Set status of time blocks before the first hour of the day to "future"
  var firstHour = dayjs("9AM", "hA");
  if (currentHour.isBefore(firstHour)) {
    $(".time-block")
      .find(".description")
      .removeClass("past present")
      .addClass("future");
  }

  // This event listener is set up with the save button. It will saves the textarea and input it//
  // In local storage. It also consologs it//

  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".description").val().trim();
    console.log(userInput);
    hourSpan = $(this).parent().attr("id").trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })

  // This gets the information from the local storage and displays it in the html//
  // in the text area. So it saves the work//

 var timeBlockEl = $(".time-block");
 var timeBlockText = $(".description");

  timeBlockText.each(function () {
    var timeBlockId = $(this).parent().attr("id");
    var savedDescription = localStorage.getItem(timeBlockId);
    if (savedDescription) {
      $(this).val(savedDescription);
    }
  });

  // This is an event listenr for the clear button//
  // It will clear the inputs from the consol logs//

  $("#clearTextBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

