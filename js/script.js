// Date Object
var date = new Date(); // new date with current date & time
console.log(date);

console.log(date.getFullYear());
console.log(date.getYear());
// month
console.log(date.getUTCMonth());
// date
console.log(date.getDate());
// day
console.log(date.getDay());
// hour
console.log(date.getHours());
// minutes
console.log(date.getMinutes());
// seconds
console.log(date.getSeconds());

// output: 04/30/2019
var month = date.getUTCMonth();
var day = date.getDate();
var year = date.getFullYear();

// format month to prefix 0 if single digit month
// if (month.length = 1) {
//     month = '0' + month;
// }
if (month < 10) {
    month = '0' + month;
}

// format day to prefix 0 if single digit date
if (day < 10) {
    day = '0' + day;
}
var formattedDate = month + '/' + day + '/' + year;
console.log(formattedDate);


var newDate = new Date("January 31, 2019");
// set hour = 18
newDate.setHours(18);
// minute = 32
newDate.setMinutes(32);
// second = 45
newDate.setSeconds(45);
console.log(newDate);

var newDate1 =new Date("March 20,2019");

newDate1.setHours(12);
newDate1.setMinutes(20);
newDate1.setSeconds(20);
console.log(newDate1);


console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());


// set a timeout
setTimeout(function() {
    console.log(new Date());
}, 10);

var newTime = new Date();
console.log(newTime.getTime() - date.getTime()); // time elapsed in milliseconds