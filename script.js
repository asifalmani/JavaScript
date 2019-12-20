/*---------------------------------
	Variables and Data Types
*/

/* var firstName = 'Muhammad';
 console.log(firstName);

 var middleName = 'Asif';
 var lastName = 'Shahzad';
 var age = 37;
 var job = 'Front End Developer';

// Variables nameing rules
var _3years = 3;
var johanMark = 'Johan and Mark'
var if = 23;*/



// Variables mutation and type correction 


/*---------------------------------
	Basic Operators
*/
/*var year = 2018;
var johanYear = 2018 - 20;
var markYear = 2018-33;

var johanYear = year -18;
console.log(johanYear);*/

// Math Operators
/*var year, yearJohan, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 33;

var johanYear = now - ageJohn;
var yearMark = now-ageJohn;

console.log(johanYear);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Type of Operators
console.log(typeof johnOlder);
console.log(typeof ageMark);
console.log(typeof now);*/


/*---------------------------------
	Operator Precedence
*/

/*var now = 2019;
var yearJohan = 1989;
var fullAge = 18;

// Multiple Operators
var isfullAge = now - yearJohan >= fullAge;
console.log(isfullAge);

// Grouping
var ageJohn = now - yearJohan;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assignments
var x, y;
x = (3+5) * 4 - 6;
x = y = (3+5) * 4 - 6; 
console.log(x);
console.log(x, y);

// More Operators
x *=2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);*/


// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/10788388#overview

// Code Challange 2
var johnMass = 68;
var markMass = 83.4;
var johnHeight = 1.78;
var markHeight = 1.7;

var johnBmi = johnMass / (johnHeight * johnHeight);
console.log(johnBmi);

var markBmi = markMass / (markHeight * markHeight);
console.log(markBmi);

var isMarkHealthy = johnBmi < markBmi;
console.log('Mark is Healthier' ,isMarkHealthy);