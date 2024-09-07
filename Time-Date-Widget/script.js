let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");


const weekdays = ["Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const formatTime = (time) =>{
  return time < 10 ? "0" + time : time;
}

const updateClock = () =>{

  const today = new Date();
  // console.log(today);
  let date = today.getDate();
  console.log(date);
  let day = weekdays[today.getDay()];
  // console.log(day);
  let month = monthNames[today.getMonth()];
  // console.log(month);

  let hours = formatTime(today.getHours());
  let minutes = formatTime(today.getMinutes());
  let seconds = formatTime(today.getSeconds());


dateContainer.innerHTML = `
<p>${day}</p><p><span> ${date}</span></p>
<p>${month}</p>
`

hoursContainer.textContent = hours + ":";
minutesContainer.textContent = minutes + ":";
secondsContainer.textContent = seconds ;


}

setInterval(updateClock,1000);