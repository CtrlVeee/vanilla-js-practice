const time = document.getElementById("time");
console.log(time.childNodes)

function showTime() {
let date = new Date().toLocaleString("en-US", {timeZone: "Asia/Singapore"});    
time.textContent= date;
}


setInterval(showTime, 1000);
