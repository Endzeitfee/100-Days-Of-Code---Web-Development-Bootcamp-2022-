let age = 32;
let userName = "Lieutenant Broccoli";
let hobbies = [
  "Self-Diagnosis",
  "Pathfinder-Project",
  "Operation-Watson",
  "MHN",
];

let job = {
  title: "Systems Diagnostic Engineer",
  place: "USS Enterprise-D",
};

function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);

// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let courseOfChoice = "The Ultimate Character Drawing Course";
let coursePrice = 99;
let goalsForCourse = [
  "learning character design",
  "drawing better backgrounds",
  "advance my shading",
];

// 2) Output ("console.log") the three variable values

console.log(courseOfChoice);
console.log(coursePrice);
console.log(goalsForCourse);

// 3) Try "grouping" the three variables together and still output their values thereafter

let onlineCourse = {
  title: "The Ultimate Character Drawing Course",
  price: 99,
  goals: [
    "learning character design",
    "drawing better backgrounds",
    "advance my shading",
  ],
};

console.log(onlineCourse.name);
console.log(onlineCourse.price);
console.log(onlineCourse.goals);

// 4) Also output the second element in your "main goals" variable

console.log(onlineCourse.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

function getListItem(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;
}

// 6) Execute your custom command from (5) and output ("console.log") the result

let firstGoal = getListItem(onlineCourse.goals, 0);
console.log(firstGoal);

let person = {
  name: "Judy", //property
  greet() {
    //method
    console.log("Hello!");
  },
};

person.greet();
