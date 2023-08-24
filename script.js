$(document).ready(function () {
    // Instructs the engine to initiate the loading process of both 
    // 1) HTML and 2) CSS as a priority.
    // Presently exhibit the existing day as well as the current time.

    // use of moment.js
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
    
    //Allocate a click event listener to the saveBtn element for capturing user input along with a timestamp.
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        // Extracted the modification from the adjacent HTML description attribute.
        var text = $(this).siblings(".description").val(); 

        // Retrieved the alteration from the higher-level HTML identifier attribute.
        var time = $(this).parent().attr("id"); 
        
        // display meesage when save button 
        $(".saveMessage").css("display", "flex");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
    // Retrieve any preserved data from LocalStorage, implementing this process for every hour that has been generated. 
    // This operation must adhere to the HTML's conversion from 24-hour format to 12-hour format.
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function hourTracker() {
        //Obtain the present count of hours.
        var currentHour = moment().hour(); // use of moment.js

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            // Verify whether the current time has progressed beyond the indicated time, 
            // and then apply appropriate CSS/HTML classes based on whether it is categorized as past, present, or future.
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();   //re-run function
})

