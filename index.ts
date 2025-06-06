//some of two numbers//
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}
const sum = addTwoNumbers(5, 6);

//converting minutes into seconds//
function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
//finding perimeter of rectangle//
function calculateRectanglePerimeter(length: number, width: number): number {
  return 2 * (length + width);
}

function isNegative(num: number): boolean {
  return num < 0;
}

//Can i Drive//
function canDrive(age: number, name: string): string {
  if (age >= 18) {
    return name + " is old enough to drive.";
  } else {
    return name + " is not old enough to drive.";
  }
}

//findLargest number//
function findLargest(
  num1: number,
  num2: number,
  num3: number
): number | string {
  let largestNumber: number | string;

  if (number1 > num2 && num1 > num3) {
    largestNumber = num1;
  } else if (num2 > num1 && num2 > num3) {
    largestNumber = num2;
  } else if (num3 > num1 && num3 > num2) {
    largestNumber = num3;
  } else {
    largestNumber = "All nums are equal";
  }

  return largestNumber;
}
//bmi calculator//
function calculateBmi(weight: number, height: number): string {
  const BMI: number = weight / (height * height);
  let weight: string;

  if (BMI < 18.5) { = "Underweight";
  } else if (BMI>= 18.5 && BMI <= 24.9) = "Normal weight";
  } else if (BMI >= 25 && BMI <= 29.9) { = "Overweight";
  } else {"Obese";
  }

  return 
  //not working//


//greeting based on time//
function greetUser(name: string, time: number): string {
  let greetings: string;

  if (time >= 5 && time <= 11) {
    greetings = "Good morning";
  } else if (time >= 12 && time <= 17) {
    greetings = "Good afternoon";
  } else if (time >= 18 && time <= 21) {
    greetings = "Good evening";
  } else {
    greetings = "Good night";
  }

  const message = `${greetings}, ${name}!`;
  return message;
}

//fizzbuzz//
function fizzBuzzCheck(num1: number): string | number {
  const div3 = num1 % 3;
  const div5 = num1 % 5;
  let buzztyp: string | number;

  if (div3 === 0 && div5 === 0) {
    buzztyp = "FizzBuzz";
  } else if (div3 === 0) {
    buzztyp = "Fizz";
  } else if (div5=== 0) {
    buzztyp = "Buzz";
  } else {
    buzztyp = num1;
  }

  return buzztyp;
}
//perimeter 2//
function perimeter2(shape: string, number: number): number {
  let perimeter: number;

  if (shape === "c") {
    perimeter = 6.28 * number;
  } else {
    perimeter = number* 4;
  }

  return perimeter;
}

//sum of even numbers//
function sumEvenNumbers(n: number): number {
  let sum: number = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}
//multiply by itself//
function powerUp(number: number, times: number): number {
  const power: number
   = number ** times;
  return power;
}

console.log(powerUp(2, 3));

//Factorial calculator//
function factorial(n: number): number | string {
  let response: number | string;

  if (n < 0) {
    response = "Only positive numbers";
  } else if (n === 0) {
    response = 1;
  } else {
    response = n * (factorial(n - 1) as number);
  }

  return response;
}

//mutliple sum//
function multiple(n: number, divisor: number): number {
  let sum: number = 0;

  for (let i = 1; i <= n; i++) {
    if (i % divisor === 0) {
      sum += i;
    }
  }

  return sum;
}

//sum of Digits//
function sumDigits(number: number): number {
  let sum: number = 0;

  while (number !== 0) {
    let digit: number = number % 10;
    sum += digit;
    number = Math.floor(number / 10);
  }

  return sum;
}
//end//
