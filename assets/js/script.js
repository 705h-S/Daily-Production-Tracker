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
    var date = moment();
   
    var save;
    
    // now will display current hour 
    var now = moment().format( " h ");

    console.log(date);
    console.log(now);

    // currentDay id element= displays current day
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
    function colorEL (){
        if (now == foo) {
            
        }
        
    }   

    // whatever the user input in the text area will be saved
    // .setitem to save value to storage
    // .getitem to retreeve value from storage
    function saveEl() {
        // on click of button.. 
        $(".saveBtn").on("click", function () {
       
    })
    }
  