// Task 1

function sample(a) {
  let sampleObject = {
    isItarable: a,
    sampleArray: [12, 63, 21, 34, 98, 57],
  };

  sampleObject.isItarable ? logel() : console.log("provided array isn`t itarable");

  function logel() {
    if (typeof a == "number") {
      console.log("this is not Boolean");
    } else if (typeof a == "boolean") {
      for (let i = 0; i < sampleObject.sampleArray.length; i++) {
        console.log(sampleObject.sampleArray[i]);
      }
    }
  }
}

sample(true);

//End task 1

//Task 2

function checkPythagoras(x, y, z) {
  if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
    return false;
  }

  let resulttt;

  z == Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    ? (resulttt = true)
    : x == Math.sqrt(Math.pow(z, 2) + Math.pow(y, 2))
    ? (resulttt = true)
    : y == Math.sqrt(Math.pow(z, 2) + Math.pow(x, 2))
    ? (resulttt = true)
    : (resulttt = false);

  console.log(resulttt);
}

checkPythagoras(4, 3, 5);

// End task 2

// Task 3

let names = [2, 14, 25, 75, 11, 6];
displayName(names);

function displayName() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(`Min value is ${Math.min(...arguments[i])} and Max value is ${Math.max(...arguments[i])}"`);
  }
}

// End task 3

// Task 4

function checkDeg(deg) {
  if (deg > 0 && deg < 90) {
    console.log("Acute angle: An angle between 0 and 90 degrees.");
  } else if (deg == 90) {
    console.log("Right angle: An 90 degree angle.");
  } else if (deg > 90 && deg < 180) {
    console.log("Obtuse angle: An angle between 90 and 180 degrees.");
  } else if ((deg = 180)) {
    console.log("Straight angle: A 180 degree angle.");
  } else {
    console.log("this is not namber");
  }
}
checkDeg(30);

// End task 4

// Task 5

function checkStudentGrade() {
  const stundents = [
    { name: "Tom", grade: 91 },
    { name: "Ben", grade: 71 },
    { name: "Kate", grade: 45 },
  ];

  function finalResult() {
    for (let i = 0; i < stundents.length; i++) {
      if (stundents[i].grade > 0 && stundents[i].grade <= 50) {
        stundents[i].finalResult = "A";
      } else if (stundents[i].grade > 50 && stundents[i].grade <= 60) {
        stundents[i].finalResult = "E";
      } else if (stundents[i].grade > 60 && stundents[i].grade <= 70) {
        stundents[i].finalResult = "C";
      } else if (stundents[i].grade > 70 && stundents[i].grade <= 80) {
        stundents[i].finalResult = "C";
      } else if (stundents[i].grade > 80 && stundents[i].grade <= 100) {
        stundents[i].finalResult = "A";
      }
    }
  }
  finalResult();

  console.log(stundents);
}

checkStudentGrade();

// End task 5
