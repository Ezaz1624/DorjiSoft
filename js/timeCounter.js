// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = (countDownDate - now)/1000;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / 3600 / 24);
    var hours = Math.floor((distance / 3600) % 24);
    var minutes = Math.floor((distance /60) % 60);
    var seconds = Math.floor(distance % 60 );
    
    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = days + " Days " + hours + " Hours "
    + minutes + " Minutes " + seconds + " Seconds ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }

}, 1000);