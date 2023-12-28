// King of the Court Countdown
var countdownDate = new Date("Dec 31, 2023 22:00:00").getTime(); //hier das neue Datum einstellen

var countdownInterval = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Das nächste Turnier ist gestartet!";
    }
}, 1000);

// Aktueller Gewinner
document.getElementById("currentWinner").innerText = getCurrentWinner(); 

function getCurrentWinner() {
    return "Jan L";
}
