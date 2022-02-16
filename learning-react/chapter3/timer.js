// setInterval(logClockTime, 1000);

// function logClockTime() {
//   let time = getClockTime();

//   console.clear();
//   console.log(time);
// }

// function getClockTime() {
//   let date = new Date();

//   let time = {
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds(),
//     ampm: "AM"
//   };

//   if (time.hours == 12) {
//     time.ampm = "PM";
//   } else if (time.hours > 12) {
//     time.ampm = "PM";
//     time.hours -= 12;
//   }

//   if (time.hours < 10) {
//     time.hours = "0" + time.hours;
//   }

//   if (time.minutes < 10) {
//     time.hours = "0" + time.minutes;
//   }

//   if (time.seconds < 10) {
//     time.seconds = "0" + time.seconds;
//   }
  
//   return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
// }

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const serealizeClockTime = date => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  second: date.getSeconds()
});

const civilianHours = clockTime => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
});

const appendAMPM = clockTime => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM"
});

const display = target => time => target(time);

const formatClock = format => time => 
  format
    .replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);

