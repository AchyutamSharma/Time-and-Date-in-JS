let date_display = document.getElementById("date");
let time_display = document.querySelector(".time");
// let Date_2_display = document.querySelector(".days-left");




let todayDate = new Date()
console.log(todayDate)
date_display.innerText = `${todayDate.toDateString().replace(" "," - ")}`;

// let today_time = new Date.now()
function myTime(){
    const date = new Date()
    time_display.innerText = date.toLocaleTimeString()
}
setInterval(myTime,1000)
