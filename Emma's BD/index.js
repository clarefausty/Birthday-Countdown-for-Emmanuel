(function() { 
    const second = 1000,
    minute = second*60,
    hour = minute*60,
    day = hour*24;
    let birthday = " Dec 25,2022 00:00:00",
    countdown = new
    Date(birthday).getTime()
    x = setInterval(function(){
        let now = new Date().getTime()
    distance = countdown - now ;
    document.getElementById("days").innerText = `${Math.floor(distance/(day))} days` 
    document.getElementById("hours").innerText = `${Math.floor((distance%(day))/(hour))} hours`
    document.getElementById("minutes").innerText = `${Math.floor((distance%(hour))/(minute))} minutes`
    document.getElementById("seconds").innerText = `${Math.floor((distance%(minute))/second)} seconds`;

    // when the date is reached
    if (distance<0) {
        let headline = document.getElementById("headline")
        let wish = document.getElementById("wish")
        wish.innerText = "HAPPY BITRHDAY"
        countdown = document.getElementById("countdown")
        content = document.getElementById("content")
        headline.innerText = "IT'S WORLD EMMANUEL'S DAY "
        clearInterval(x);

    }
    }, 0)
    

}());