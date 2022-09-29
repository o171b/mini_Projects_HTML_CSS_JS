const months = [
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
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


//let futureDate = new Date(2022,8,21,11,30,0);
const futureDate = new Date(tempYear, tempMonth,tempDay +10,
    11,30,0)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];



giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
 
// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
const today = new Date().getTime();
const t = futureTime - today;
console.log(t);

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60*60*1000;
const oneMinute = 60*1000;

let days = t/oneDay;
days = Math.floor(days)
let hours = Math.floor( (t % oneDay)/oneHour); //remainder hours till countdown
let minutes = Math.floor((t % oneHour) / oneMinute)
let seconds = Math.floor((t % oneMinute) / 1000)

const values = [days,hours,minutes,seconds];
function format(cats){
    if (cats < 10){
        return (cats = `0${cats}`);
    }
    return cats;
}

items.forEach(function(cats,dogs){ //cats, dogs can be swapped for item,index
    cats.innerHTML = format(values[dogs]);
});
if (t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> sorry, giveaway has expired</h4>`;
}

}


// countdown
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();

if (t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> sorry, giveaway has expired</h4>`;
}
}


// countdown
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();