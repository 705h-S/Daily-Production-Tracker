// when webpage is opened current day is displayed using moment () I am also going to include the time
// --I'll create two variables one for the date and the other for time 
// -- var = date format " ddd, MMM-D-YYYY" =  Sat, Jan-01-2022
// --var = Time format "h:mm:ss a" =  3:33:15 PM
//         #########
//  I'll have a section for every hour of the day that is color coded when it is the current hour, past time, furture time 
// -- Ill create a new var "now" and it'll be equal to var=date. it'll be formated in time so "h" <- focusing on hour element 
// -- if curent hour is equal to a section it'll be red
// -- elseif section is less than curent hour it'll be grey
//-- else section is greater than current hour it'll be green
//         #########
// inside those sections user can input a string 
// -- section will have input tag with a type of text so user can input string 
// user's input of string can be locally saved if user manually press save button
// -- create an addlistener event on save button
// -- when button it 'clicked' the user input in that section will be saved using localstorage.setitem.

    //  Create my Variables 

        // need them to save to deignated time block
    $("#h8 .desription").val(localStorage.getItem("h8"));
    $("#h9 .description").val(localStorage.getItem("h9"));
    $("#h10 .description").val(localStorage.getItem("h10"));
    $("#h11 .description").val(localStorage.getItem("h11"));
    $("#h12 .description").val(localStorage.getItem("h12"));
    $("#h13 .description").val(localStorage.getItem("h13"));
    $("#h14 .description").val(localStorage.getItem("h14"));
    $("#h15 .description").val(localStorage.getItem("h15"));
    $("#h16 .description").val(localStorage.getItem("h16"));
    $("#h17 .description").val(localStorage.getItem("h17"));

    var date = moment();
   
    var save;
    
    // now will display current hour 
    var now = moment().format( " kmm ");

    console.log(date);
    console.log(now);

    // currentDay id element= displays current day

    $(document).ready( function (){
        
        $("#currentDay").text(date.format("ddd, MMM Do, YYYY" ));

        // displays dynamic current time 
        let updateTime = function () {
            let currentTime = moment().format('h:mm:ss a ')
            $("#currentTime").text(currentTime)
        }
        updateTime();

        setInterval(updateTime, 500);
    // end of current time display 
        
        // Time block changes color depending what time 
        // now == timeblock add class .present
        // now < time block add class .future
        // now > time block add class .past
    
        // .each(function()) to loop through each element with a class of time_block
        
            $(".time-block").each(function () {
                // decided to use the id parent instead of child class of ".hour"
             var timeArr = parseInt($(this).attr("id").split("h")[1]);
                console.log(timeArr);

                // 
               if(timeArr < now ){
                $(".description").removeClass("future");
                $(".description").removeClass("present");
                $(".description").addClass("past");
               }
            else if(timeArr === now) {
                $(".description").removeClass("future");
                
                $(".description").removeClass("past");
                $(".description").addClass("present");
            } 
                else {
                
                $(".description").removeClass("present");
                $(".description").removeClass("past");
                $(".description").addClass("future");
                }
                
            })
      
        
      
     

   
    // whatever the user input in the text value will be saved
    // .setitem to save value to storage
    // .getitem to retreeve value from storage
    
    
     console.log(timeKey);
        // on click of button.. 
        $(".saveBtn").on("click", function () {
            // save text area input
            var text = $(this).siblings(".description").val();
            var time = timeKey
                 // time should be the key
                 // text should be the value 
            localStorage.setItem(time,text);
    })
    
  
})