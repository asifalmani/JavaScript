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
/*var johnMass = 68;
var markMass = 83.4;
var johnHeight = 1.78;
var markHeight = 1.7;

var johnBmi = johnMass / (johnHeight * johnHeight);
console.log(johnBmi);

var markBmi = markMass / (markHeight * markHeight);
console.log(markBmi);

var isMarkHealthy = johnBmi < markBmi;
console.log('Mark is Healthier' ,isMarkHealthy);*/


/*var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;

console.log('Is Marks\'s BMI higher than Johan\'s?' + markHigherBMI);
*/


/****************************************
	* If / else statments
*/

/*var firstName = 'John'
var civilStatus = 'single';

if (civilStatus === 'married') {
	console.log(firstName + 'is married');
} else {
	console.log(firstName + 'will hopefully marry soon:)');
}

var isMarried = true;
if (isMarried) {
	console.log(firstName + 'is married');
} else {
	console.log(firstName + 'will hopefully marry soon:)');
}


var massMark = 78;
var heightMark = 1.69;

var massJohn = 192;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if  (BMIMark > BMIJohn) {
	console.log('Mark\'s BMI is higher than Johan\'s.');
} else {
	console.log('Johan\'s BMI is higher than Mark\'s.');
}*/


/*var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Marks\'s BMI higher than Johan\'s?' + markHigherBMI);*/


/****************************************
	* Boolean Logic
*/

/*var firstName = 'Johan';
var age =20;

if (age < 13) {
	console.log(firstName + 'is a boy.')
} else if (age >= 13 && age < 20) {
	console.log(firstName + 'is a teenager');
} else if ( age >= 20 && age <30) {
	console.log(firstName + 'is a young man');
} else {
	console.log(firstName + 'is a man.')
}*/

/****************************************
	* The Ternary Operator and Switch Statements
*/

/*var firstName = 'John';
var age = 16;*/

// Ternary Operator
/*age >= is ? console.log(firstName + 'dirnks bear.'): console.log(firstName + 'dirnks juice');

var dirnk = age >= 18 ? 'bear' : 'juice';
console.log(dirnk);*/

/*if (age >= 18) {
	var dirnk = 'bear';
} else {
	var drink = 'juice';
}*/

// Switch Statements
/*var job = 'cop';
switch (job) {
	case 'teacher':
		console.log(firstName + 'teachs kids how to code.');
		break;
	case 'driver':
		console.log(firstName + 'drives an uber in Lahore.');
		break;
	case 'designer':
		console.log(firstName + 'designs beautiful websites.');
	default:
		console.log(firstName + 'does something else.');
}

age = 22;
switch (true) {
	case age < 13:
		console.log(firstName + 'is a boy.');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + 'is a teenager');
		break;
	case age >= 20 && age < 30:		
		console.log(firstName + 'is a young man');
		break;
	default: 
		console.log(firstName + 'is a man.');
}		*/

// Code Challange 2

/*var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (119 + 94 +123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike,scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
	console.log('Johan\'s team wins with' + scoreJohn + 'points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
	console.log('Mike\'s team wins with' + scoreMike + 'points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
	console.log('Mary\'s team wins with' + scoreMary + 'points');
} else {
	console.log('There is draw');
}
*/
/*if (scoreJohn > scoreMike) {
	console.log('Johan\'s team wins with' + scoreJohn + 'points');
} else if (scoreMike > scoreJohn) {
	console.log('Mike\'s team wins with' + scoreMike + 'points');
} else {
	console.log('There is a draw');
}


/****************************************
	* Functions
*/

/*function calculateAge(birthYear) {
	 return 2020 - birthYear;
}

var ageAsif = calculateAge(1983);
var ageFaisal = calculateAge(1984);
console.log(ageAsif, ageFaisal, ageAdnan);

function yearUntilRetirement(year, firstName) {
	var age = calculateAge(year)
	var retirement = 65 - age;
	console.log(firstName + 'retires in ' + retirement + 'years.')
}

function yearUntilRetirement(year, firstName) {
	var age = calculateAge(year)
	var retirement = 65 - age;
	if ( retirement > 0) {
		console.log(firstName + 'retires in ' + retirement + 'years.')	
	} else {
		console.log(firstName + 'is already retired');
	}
	
}
yearUntilRetirement(1983, 'Asif');
yearUntilRetirement(1984, 'Faisal');
yearUntilRetirement(1954, 'Adnan');*/


/****************************************
	* Functions Statments and Expression
*/

// Functions Declaration
// function whatDoYouDo(job, firstName){}

// Functions Expression
/*var whatDoYouDo = function (job, firstName) {
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' drives a cap in Lahore';
		case 'designer':
			return firstName + ' designs a beautiful websites';
		default:
			return firstName + ' does something else';
	}
}

console.log(whatDoYouDo('teacher', 'Johan'));
console.log(whatDoYouDo('driver', 'Adnan'));
console.log(whatDoYouDo('designer', 'Asif'));*/

/****************************************
	* Arrays
*/

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);
